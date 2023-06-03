import { useEffect, useState } from "react";
import "./download.scss";
import { collection, query, where, onSnapshot, DocumentData } from "firebase/firestore";
import { db } from "../../config/firebase";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Loader from "../../components/common/loader";
import { QRCodeCanvas } from "qrcode.react";

function DownloadPage() {
    const queryParameters = new URLSearchParams(window.location.search);
    const fileId = queryParameters.get("id");
    const [files, setFiles] = useState<DocumentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const host = window.location.hostname === "localhost"
        ? `${window.location.hostname}:${window.location.port}`
        : window.location.hostname;

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

     const formatFileSize = (size: number) => {
        const CONVERSION_UNIT = 1024;
        const kilobytes = size / CONVERSION_UNIT;
        const megabytes = kilobytes / CONVERSION_UNIT;
        const gigabytes = megabytes / CONVERSION_UNIT;

        if (kilobytes < CONVERSION_UNIT) { return `${kilobytes % 1 === 0 ? kilobytes : kilobytes.toFixed(kilobytes < 10 ? 1 : 0)} KB` }
        if (megabytes < CONVERSION_UNIT) { return `${megabytes % 1 === 0 ? megabytes : megabytes.toFixed(megabytes < 10 ? 1 : 0)} MB` }
        return `${gigabytes.toFixed(1)} GB`;
    }

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
            <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Loader/>
                <span>Please wait...</span>
            </div>
        );
    }

    if (error || (files.length <= 0)) {
        return (
            <>
                <Navigation/>
                <div style={{height: "100vh", padding: "100px 30px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "column"}}>
                    <i className="fa-regular fa-face-worried" style={{fontSize: 40, marginBottom: 30}}></i>
                    <h3>There was a problem getting the file.</h3>
                </div>
                <Footer/>
            </>
        );
    }

    return (
        <>
            {console.log(files[0])}
            <Navigation/>
            <div className="f-dl-wrapper">
                <div>
                    <h1 style={{textAlign: "center"}}>{(files.length > 0) ? files[0].name : null}</h1>
                    <span>Size: {formatFileSize(files[0].size)}</span>
                    <button className="f-btn" onClick={() => downloadFile(files[0])}>
                        <i className="fa-solid fa-arrow-down-to-line"></i>
                        Download
                    </button>
                </div>
                <div>
                    <QRCodeCanvas style={{ width: 250, height: 250 }} value={`${host}/download?id=${files[0].id}`} />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DownloadPage;
