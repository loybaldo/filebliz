import { collection, where, query, onSnapshot, DocumentData } from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../auth/auth-provider";
import { db } from "../../../../config/firebase";
import ListView from "../list-view";
import "./upload-list.scss";


interface FileDataInterface {
    id: string;
    uploader: string;
    name: string;
    size: number;
    type: string;
    downloadURL: string;
    dateUploaded: string;
}

function UploadList() {
    const [files, setFiles] = useState<DocumentData>([]);
    const { currentUser } = useContext(AuthContext);

    const getData = useCallback(() => {
        const filesRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
        const q = query(filesRef, where("uploader", "==", currentUser?.uid));
        const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
            const filesList = snapshot.docs.map((doc) => doc.data());
            setFiles(filesList);
        });
        return unsubscribe;
    }, [currentUser?.uid])

    useEffect(() => {
        const unsubscribe = getData();
        return unsubscribe;
    }, [getData]);

    return (
        <div className="f-upload-list">
            <span className="f-label">Uploaded ({files.length})</span>
            {(files.length === 0) ? (<div className="f-upload-list-no-data">
                <p>No Data</p>
            </div>) : null}
            {files.map((file: FileDataInterface) => (<ListView key={Math.random()} id={file.id} fileName={file.name} size={file.size} fileExt={file.type.split("/")[1]} url={file.downloadURL} date={file.dateUploaded.split("T")[0]}/>))}
        </div>
    );
}

export default UploadList;
