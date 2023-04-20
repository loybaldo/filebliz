import { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../auth/auth-provider";
import { db, storage } from "../../../config/firebase";
import Button from "../../common/button";
import GirlSmile from "../../../assets/illus-ok.svg";
import "./landing.scss";
import ModalLoading from "../modal-loading";
import ModalQR from "../../widgets/modal-qr";
// import svg from "../../../assets/landing-bg.svg"


function Landing() {
    const { currentUser } = useContext(AuthContext);
    const [downloadURL, setDownloadURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleUpload = () => {
        if (file == null) return;
        setUploading(true);

        const fileRef = ref(storage, `${process.env.REACT_APP_UPLOAD_PATH}/${uuidv4()}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        // Track the upload percentage.
        uploadTask.on("state_changed", (snapshot) => {
            const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
            setProgress(+progress);
        }, (err) => {
            console.error(err);
        }, async () => {
            // Save the file for unknown users.
            if (!currentUser) {
                getDownloadURL(fileRef).then((url) => {
                    setDownloadURL(url);
                    setUploading(false);
                });
            } else {
                // Save the file for authenticated users.
                try {
                    const downloadURL = await getDownloadURL(fileRef);
                    const fileInfo = {
                        uploader: currentUser.uid,
                        id: uuidv4(),
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        dateUploaded: new Date().toISOString(),
                        downloadURL: downloadURL
                    };
                    await addDoc(collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!), fileInfo);
                    setDownloadURL(downloadURL);
                    setUploading(false);
                } catch (err) {
                    console.error(err);
                }
            }
        });
    };

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files != null && files.length > 0) {
            setFile(files[0]);
            const fileName = files[0].name.trim();
            const maxFileNameLength = 13;
            let displayFileName = fileName;
            if (fileName.length > maxFileNameLength) {
                const [fileNameWithoutExtension, fileExtension] = fileName.split('.');
                const shortenedFileName = fileNameWithoutExtension.slice(0, maxFileNameLength - 3);
                displayFileName = `${shortenedFileName}...${fileExtension}`;
            }
            const label = e.target.previousElementSibling as HTMLLabelElement;
            if (label != null) {
                label.style.direction = 'rtl';
                label.textContent = displayFileName;
            }
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(downloadURL).then(() => {
            setDownloadURL("");
            alert("Link copied to clipboard.");
            window.location.reload();
        }).catch((err) => console.error('Could not copy text: ', err));
    }


    return (
        <>
            <div className="f-landing">
                <div className="f-container">
                    <div className="f-info">

                        <h1>Effortlessly Share Your Files with Filebliz</h1>
                        <p>With Filebliz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>

                        <div className="f-form" tabIndex={0} role="button">
                            <label htmlFor="file-upload" className="custom-file-upload" style={{ border: "none", backgroundColor: "transparent", outline: "none" }}>
                                Choose Files
                            </label>
                            <input role="button" id="file-upload" type="file" onChange={handleFileChange} />
                            <Button onclick={handleUpload} classItem={"primary"}>Upload</Button>
                        </div>

                    </div>
                    <div className="f-info">
                        <img draggable="false" src={GirlSmile} alt="Girl Smile" />
                    </div>
                </div>
                <div className="f-background"></div>
            </div>

            <ModalLoading label={(progress < 99) ? `Uploading (${progress}%)` : "Processing..."} show={(uploading) ? true : false} />

            {downloadURL && <ModalQR url={downloadURL} onclick={handleCopyLink} show={true} />}
        </>
    );
}

export default Landing;
