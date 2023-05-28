import { useEffect, useState } from "react";
import "./download.scss";
import { collection, query, where, onSnapshot, DocumentData } from "firebase/firestore";
import { db } from "../../config/firebase";

function DownloadPage() {
    const queryParameters = new URLSearchParams(window.location.search);
    const fileId = queryParameters.get("id");
    const [files, setFiles] = useState<DocumentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getFile = () => {
        const filesRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
        const q = query(filesRef, where("id", "==", fileId));
        const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
            const filesList = snapshot.docs.map((doc) => doc.data());
            setFiles(filesList);
            setLoading(false);
        }, (error) => {
            setError("Error fetching file data");
            setLoading(false);
        });
        return unsubscribe;
    };

    useEffect(() => {
        const unsubscribe = getFile();
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div style={{height: 300, display: "flex", alignItems: "center", justifyContent: "center"}}>
            Loading...
            </div>
        );
    }

    if (error || (files.length <= 0)) {
        return (
            <div style={{height: 300, padding: "100px 30px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
            There was a problem getting the file.
            </div>
        );
    }

    return (
        <>
            <div className="f-dl-wrapper">
                <h1 style={{textAlign: "center"}}>{(files.length > 0) ? files[0].name : null}</h1>
                <a className="f-btn" href={(files.length > 0) ? files[0].downloadURL : null} download={files[0].name}>
                    Download
                </a>
            </div>
        </>
    );
}

export default DownloadPage;
