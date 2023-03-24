import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// removed uploadBytes | ESLINT Err/Warning | Causing Github Actions to not continue

import { v4 as uuidv4 } from "uuid";
import { storage } from "../../../../config/firebase";
import Button from "../../../common/button";
import GirlSmile from "../../../../assets/illus-ok.svg";
import "./landing.scss";
import ModalLoading from "../../../common/modal-loading";
import ModalQR from "../../../common/modal-qr";


function Landing() {
    const [downloadURL, setDownloadURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState<File | null>(null);


    const handleUpload = () => {
        if (file == null) return;
        setUploading(true);

        const fileRef = ref(storage, `${process.env.REACT_APP_UPLOAD_PATH}/${uuidv4()}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
            setProgress(+progress);
        }, (error) => {
            console.error(error);
        }, () => {
            console.log("Upload complete");
            getDownloadURL(fileRef).then((url) => {
                setDownloadURL(url);
                console.log("Download URL:", url);
                setUploading(false);
            });
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

      

    return (
        <>
            <div className="f-landing">
                <div className="f-container">
                    <div className="f-info">

                        <h1>Effortlessly Share Your Files with Filebliz</h1>
                        <p>With Filebliz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>
                        
                        <div className="f-form" tabIndex={0}>
                            <label htmlFor="file-upload" className="custom-file-upload" style={{border: "none", backgroundColor: "transparent", outline: "none"}}>
                                Choose Files
                            </label>
                            <input id="file-upload" type="file" onChange={handleFileChange}/>
                            <Button onclick={handleUpload} label="Upload"/>
                        </div>

                    </div>
                    <div className="f-info">
                        <img src={GirlSmile} alt="Girl Smile" />
                    </div>
                </div>
            </div>

            <ModalLoading label={`Uploading (${progress}%)`} show={(uploading) ? true : false}/>
        
            {downloadURL && <ModalQR url={downloadURL} show={true} />}
        </>
    );
}

export default Landing;
