import { collection, where, query, onSnapshot, DocumentData, orderBy, deleteDoc, getDocs } from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../auth/auth-provider";
import { db } from "../../../../config/firebase";
import Button from "../../../common/button";
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
        const q = query(filesRef, where("uploader", "==", currentUser?.uid), orderBy("dateUploaded", "desc"));
        const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
            const filesList = snapshot.docs.map((doc) => doc.data());
            console.log(snapshot.docs)
            setFiles(filesList);
        });
        return unsubscribe;
    }, [currentUser?.uid])

    useEffect(() => {
        const unsubscribe = getData();
        return unsubscribe;
    }, [getData]);

    const handleDeleteAll = async () => {
        const fileRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
        const q = query(fileRef, where("uploader", "==", currentUser?.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    }

    return (
        <div className="f-upload-list">
            {console.log(files)}
            <div className="f-del-all-wrapper">
                <span className="f-label">Uploaded ({files.length})</span>
                <Button label="Delete All" onclick={handleDeleteAll}/>
            </div>
            {(files.length === 0) ? (<div className="f-upload-list-no-data">
                <p>No Data</p>
            </div>) : null}
            {files.map((file: FileDataInterface) => (<ListView key={Math.random()} id={file.id} fileName={file.name} size={file.size} fileExt={file.type.split("/")[1]} url={file.downloadURL} date={file.dateUploaded.split("T")[0]}/>))}
        </div>
    );
}

export default UploadList;