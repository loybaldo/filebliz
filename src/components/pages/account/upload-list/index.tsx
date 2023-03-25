import { collection, where, query, onSnapshot, DocumentData } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../auth/auth-provider";
import { db } from "../../../../config/firebase";
import ListView from "../list-view";
import "./upload-list.scss";


interface FileDataInterface {
    id: string; // fileId
    uploader: string; // uploader
    name: string; // filename
    size: number;
    type: string; // fileType
    downloadURL: string; // downloadURL
    dateUploaded: string; // dateUploaded

    
    
    
    
    
    
}

function UploadList() {
    const [files, setFiles] = useState<DocumentData>([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const unsubscribe = getData();
        return unsubscribe;
    }, []);

    const getData = () => {
        const filesRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
        const q = query(filesRef, where("uploader", "==", currentUser?.uid));
        const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
            const filesList = snapshot.docs.map((doc) => doc.data());
            setFiles(filesList);
        });
        return unsubscribe;
    }

    return (
        <div className="f-upload-list">
            {console.log(files)}
            <span className="f-label">Uploaded ({files.length})</span>
            {files.map((file: FileDataInterface) => (<ListView key={Math.random()} id={file.id} fileName={file.name} size={file.size} fileExt={file.type.split("/")[1]}/>))}
        </div>
    );
}

export default UploadList;
