import { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../auth/auth-provider";
import { db, storage } from "../../../config/firebase";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import GirlSmile from "../../../assets/illus-ok.svg";
import ModalQR from "../../widgets/modal-qr";
import Modal from "../../common/modal-wrapper";
import "./landing.scss";


export default function Landing() {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isUploadDisabled, setIsUploadDisabled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState("");
    const [upBtnVal, setUpBtnVal] = useState("Upload");
    const [memErr, setMemErr] = useState(false);
    const { totalUsedStorage, currentUser, memberships } = useContext(AuthContext);

    const host = (window.location.hostname === "localhost") ? `${window.location.hostname}:${window.location.port}` : window.location.hostname;


    // use drag and drop
    const onHover = 'hovering';
    const onHoverOutside = 'notHovering';
    const element = document.getElementById("dropdown-location");

    // ==========================================
    //     Handles Drag and Drop features
    // ==========================================
    function handleDragOver(param: any, e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault();
        e.stopPropagation();

        updateLabelWithFileName('Drop Here!');

        // perhaps simplify this?
        if (param === 'hovering') {
            updateLabelWithFileName('Ready!');
            element?.classList.remove("dragging-over");
            element?.classList.add("dragging-over-active");
        } else if (param === 'notHovering') {
            element?.classList.remove("dragging-over-active");
            element?.classList.add("dragging-over");
        }
    }

    function handleDragLeave(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault();
        e.stopPropagation();

        updateLabelWithFileName('Choose a File');
        removeClass()
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsUploadDisabled(true);

        const files = e.dataTransfer.files;
        if (files != null && files.length > 0) {
            setFile(files[0]);
            const fileName = files[0].name.trim();
            updateLabelWithFileName(fileName);
        }

        removeClass()
    }

    function removeClass() {
        if (element) {
            element.classList.remove("dragging-over");
            element.classList.remove("dragging-over-active");
        }
    }

    // update filename
    function handleFileClick(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        setIsUploadDisabled(true);

        if (files != null && files.length > 0) {
            setFile(files[0]);
            const fileName = files[0].name.trim();
            updateLabelWithFileName(fileName);
        }
    }

    // cancel operation
    function handleCancelClick() {
        setFile(null);
        updateLabelWithFileName('Choose a File');
        setIsUploadDisabled(false);
    };

    // extracted filename handler
    function updateLabelWithFileName(fileName: string) {
        const maxFileNameLength = 13;

        if (fileName.length > maxFileNameLength) {
            const [fileNameWithoutExtension, fileExtension] = fileName.split('.');
            const shortenedFileName = fileNameWithoutExtension.slice(0, maxFileNameLength - 3);
            const displayFileName = `${shortenedFileName}...${fileExtension}`;
            const label = document.getElementById('file-label');
            if (label) {
                label.innerHTML = displayFileName;
            }
        } else {
            const label = document.getElementById('file-label');
            if (label) {
                label.innerHTML = fileName;
            }
        }
    }

    // ==========================================
    //     Handles Upload Task
    // ==========================================
    function handleUpload() {
        const genID = uuidv4();
        let expiration: number | null = null;
        const MAX_FREE_STORAGE = 2000000000;
		const MAX_PRO_STORAGE = 5000000000;
		const MAX_PREM_STORAGE = 18000000000;
        if (file == null) return;
        if (!currentUser || (memberships.length <= 0)) {
            expiration = new Date().getTime();
            const allowedTypes = [
                "video/mpeg",
                "video/mp4",
                "image/png",
                "image/jpg",
                "image/jpeg",
                "application/pdf",
                "application/msword",
            ];
            if (!allowedTypes.includes(file.type)) {
                setMemErr(true);
                return;
            }
            if (totalUsedStorage > MAX_FREE_STORAGE) {
				alert("FREE MEMBER\nFull storage!");
				return;
			}
        }
        if ((memberships.length > 0) && (memberships[0].type === "pro") && totalUsedStorage > MAX_PRO_STORAGE) {
			alert("PRO MEMBER\nFull storage!");
			return;
		}
		if ((memberships.length > 0) && (memberships[0].type === "premium") && totalUsedStorage > MAX_PREM_STORAGE) {
			alert("PRO MEMBER\nFull storage!");
			return;
		}
        setIsUploadDisabled(false);
        const fileExtension = file.name.split(".").pop() || "";
        const genName = uuidv4() + "." + fileExtension;

        // reference file path
        const fileRef = ref(storage, `${process.env.REACT_APP_UPLOAD_PATH}/${genName}`);
        // incorporate file data to be passed for a task
        const uploadTask = uploadBytesResumable(fileRef, file);
        // Track the upload percentage.
        uploadTask.on("state_changed", (snapshot) => {
            const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
            setProgress(+progress);
            setUpBtnVal("Uploading...")
        }, (err) => {
            console.error(err);
        }, async () => {
            try {
                const downloadURL = await getDownloadURL(fileRef);
                const fileInfo = {
                    uploader: (!currentUser) ? null : currentUser.uid,
                    id: genID,
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    expiration: expiration,
                    dateUploaded: new Date().toISOString(),
                    downloadURL: downloadURL,
                };
                await addDoc(collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!), fileInfo);

                setDownloadURL(`${host}/download?id=${genID}`);
                setUpBtnVal("Upload");
                setProgress(0);
                openModal();
            } catch (err) {
                console.error(err);
            }
        });
    }

    function handleCopyLink() {
        navigator.clipboard.writeText(downloadURL).then(() => {
            setDownloadURL("");
            closeModal();
            alert("Link copied to clipboard.");
        }).catch((err) => console.error('Could not copy text: ', err));
    }


    // MODAL MANAGER
    function openModal() {
        setShowModal(true);
        document.body.classList.add('disable-events');
        document.addEventListener('keydown', handleEscapeKeyPress);

        const outsideElements = document.querySelectorAll('a, div, button');
        outsideElements.forEach((element) => {
            element.setAttribute('tabindex', '-1');
        });

        document.body.style.overflow = 'hidden';
    };

    function handleEscapeKeyPress(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    function closeModal() {
        setShowModal(false);
        document.removeEventListener('keydown', handleEscapeKeyPress);
        const outsideElements = document.querySelectorAll('a, div, button');
        outsideElements.forEach((element) => {
            element.removeAttribute('tabindex');
        });
        document.body.style.overflow = 'unset';
    };

    // Disable mouse events
    function handleMouseEnter() {
        document.body.classList.remove('disable-events');
    };

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCopyLink} onMouseEnter={handleMouseEnter} modalTitle={'Quick Share'}>
                <ModalQR url={downloadURL} onclick={handleCopyLink} />
            </Modal>

            <Modal isOpen={memErr} onClose={() => setMemErr(false)} modalTitle="Free Member">
                <span>Only videos, photos, and documents are allowed.</span>
                <button onClick={() => setMemErr(false)} className="f-btn primary special-signin" style={{ margin: "30px 0 20px 0" }}> Got it </button>
            </Modal>

            <div className="f-landing" onDragOver={(e) => handleDragOver(onHoverOutside, e)} onDragLeave={handleDragLeave}>
                <div className="f-container">
                    <div className="f-info">
                        <h1>Effortlessly Share Your Files with Filebliz</h1>
                        <p>With Filebliz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>
                        <div className="f-progress-bar"
                            id="progress-bar"
                            style={{
                                width: `${progress}%`,
                                height: "60px",
                                backgroundColor: (progress < 99) ? "" : `#46BC4A`
                            }}
                        ></div>
                        <div className="f-form-background"></div>
                        <div className="f-form"
                            id="dropdown-location"
                            role="button"
                            tabIndex={1}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' && document.activeElement) {
                                    event.preventDefault();
                                    document.getElementById('file-upload')?.click();
                                }
                            }}
                            onDragOver={(e) => handleDragOver(onHover, e)}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="f-form-container">
                                <label
                                    htmlFor="file-upload"
                                    className="custom-file-upload"
                                    style={{ border: "none", backgroundColor: "transparent", outline: "none" }}>

                                    <span id="file-label">Choose a File</span>
                                    <input id="file-upload" type="file" onChange={handleFileClick} />
                                </label>

                                <span style={{ display: isUploadDisabled ? "inline-block" : "none" }}>
                                    <Button onclick={handleCancelClick} classItem={"danger"} tabIndex={2}>Cancel</Button>
                                </span>
                                <Button onclick={handleUpload} classItem={isUploadDisabled ? "primary" : "disabled"} disabled={isUploadDisabled ? false : true} tabIndex={3}>
                                    <span>
                                        {upBtnVal}
                                    </span>
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className="f-info">
                        <img draggable="false" src={GirlSmile} alt="Girl Smile" />
                    </div>
                </div>
                <div className="f-background"></div>
                <div className="ff-agreement"><p>By accessing or using our services, you agreed to our <Link to="/privacy">privacy policy</Link> and <Link to="/terms">terms of use</Link>.</p></div>
            </div>
        </>
    );
}
