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

    function downloadFile(file: any) {
        if (file && file.downloadURL) {
            fetch(file.downloadURL)
                .then(response => response.blob())
                .then(blob => {
                    // Create a temporary anchor element
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.style.display = "none";
                    a.href = url;
                    a.download = file.name;
                    document.body.appendChild(a);
                    
                    // Trigger the click event
                    a.click();
                    
                    // Clean up the temporary element
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                })
                .catch(error => {
                    console.error("Error downloading the file:", error);
                });
        }
    }
    

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
                <button className="f-btn" onClick={() => downloadFile(files[0])}>
                    Download
                </button>
            </div>

        </>
    );
}

export default DownloadPage;
