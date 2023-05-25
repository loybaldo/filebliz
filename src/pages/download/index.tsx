import { Link } from "react-router-dom";
import "./download.scss";
import { useEffect, useState } from "react";
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
        return <div style={{height: 300, display: "flex", alignItems: "center", justifyContent: "center"}}>Loading...</div>;
    }

    if (error || (files.length <= 0)) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="f-dl-wrapper">
                <h1>{(files.length > 0) ? files[0].name : null}</h1>
                <a className="f-btn" href={(files.length > 0) ? files[0].downloadURL : "#"} download>
                    Download
                </a>
            </div>
        </>
    );
}

export default DownloadPage;
