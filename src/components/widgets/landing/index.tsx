import { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../auth/auth-provider";
import { db, storage } from "../../../config/firebase";
import Button from "../../common/button";
import GirlSmile from "../../../assets/illus-ok.svg";
import ModalQR from "../../widgets/modal-qr";
import Modal from "../../common/modal-wrapper";
import "./landing.scss";


function Landing() {
    const [showModal, setShowModal] = useState(false);                  // Universal Modal Handler
    /*********/
    const [file, setFile] = useState<File | null>(null);                // Update DOM with filename
    const [isUploadDisabled, setIsUploadDisabled] = useState(false);    // Update DOM Enable/disable upload buttons
    /*********/
    const [progress, setProgress] = useState(0);                        // sets progress bar
    const [downloadURL, setDownloadURL] = useState("");                 // download url container
    const { currentUser, memberships } = useContext(AuthContext);                    // authentication
    const host = window.location.hostname === "localhost"
        ? `${window.location.hostname}:${window.location.port}`
        : window.location.hostname;


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

        /**********/                           //   FIXME OPTIONAL I did setFile(null); but apparently it cannot do it again twice "properly" soooo I need help for this.
        // /**********/ window.location.reload(); //   temporary fix
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

    // Set upload task
      function handleUpload() {
        const genID = uuidv4();
        if (file == null) return;

        if (!currentUser || (memberships.length <= 0)) {
            const allowedTypes = ["video/mpeg","video/mp4", "image/png", "image/jpg", "image/jpeg", "application/pdf", "application/msword"];
    
            if (!allowedTypes.includes(file.type)) {
              alert("FREE MEMBER\nInvalid file type. Only videos, photos, and documents are allowed.");
              return;
            }
        }

        setIsUploadDisabled(false);

        // reference file path
        const fileRef = ref(storage, `${process.env.REACT_APP_UPLOAD_PATH}/${uuidv4()}`);

        // incorporate file data to be passed for a task
        const uploadTask = uploadBytesResumable(fileRef, file);

        // Track the upload percentage.
        uploadTask.on("state_changed", (snapshot) => {
            const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
            setProgress(+progress);
        },
            (err) => {
                console.error(err);
            },
            // async task: push to cloud
            async () => {
                // Save the file for unknown users.         
                if (!currentUser) {
                    getDownloadURL(fileRef).then((url) => {
                        setDownloadURL(`${host}/download?id=${genID}`);
                        openModal();
                    });
                }
                else {
                    // Save the file for authenticated users.
                    try {
                        const downloadURL = await getDownloadURL(fileRef);
                        const fileInfo =
                        {
                            uploader: currentUser.uid,
                            id: genID,
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            dateUploaded: new Date().toISOString(),
                            downloadURL: downloadURL
                        };
                        await addDoc(collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!), fileInfo);
                        // Add the storage
                        const purchaseDocRef = doc(db, process.env.REACT_APP_PURCHASE_TABLE!, memberships[0].id);
                        await updateDoc(purchaseDocRef, { usedStorage: memberships[0].usedStorage + file.size });

                        setDownloadURL(`${host}/download?id=${genID}`);

                        openModal();
                    }
                    catch (err) {
                        console.error(err);
                    }
                }
            });
    };

      

    function handleCopyLink() {
        navigator.clipboard.writeText(downloadURL).then(() => {
            setDownloadURL("");
            closeModal();
            alert("Link copied to clipboard.");

            // added, reload to temporarily get rid of file selected in system since we dont have a cancel method yet. check Line 125 for referemce
            // window.location.reload();

            /**********/ // NOTE
            /**********/ // Might wanna implement resetting
            /**********/ // 'setProgress' value back to 0

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

        /******/  // may not be necessarry
        /******/  const outsideElements = document.querySelectorAll('a, div, button');
        /******/  outsideElements.forEach((element) => {
        /******/      element.removeAttribute('tabindex');
            /******/
});

        document.body.style.overflow = 'unset';

        // ,.... yes, reload the window to ez bug fix kekw
        // window.location.reload();
    };

    // Disable mouse events
    function handleMouseEnter() {
        document.body.classList.remove('disable-events');
    };


    // final DOM progress bar
    let progressValue;

    if (progress < 1) {
        progressValue = "Upload";
    } else if (progress < 100) {
        progressValue = `${progress}%`;
    } else {
        const styleChange = document.getElementById("progress-bar");
        if (styleChange) {
            styleChange.style.width = "0";
        }
        progressValue = "Processing...";
    }

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCopyLink} onMouseEnter={handleMouseEnter} modalTitle={'Quick Share'}>
                <ModalQR url={downloadURL} onclick={handleCopyLink} />
            </Modal>

            <div className="f-landing" onDragOver={(e) => handleDragOver(onHoverOutside, e)} onDragLeave={handleDragLeave}>
                <div className="f-container">
                    <div className="f-info">

                        <h1>Effortlessly Share Your Files with Filebliz</h1>
                        <p>With Filebliz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>

                        {/* <Button classItem={""} onclick={openModal}>Debug: Open Modal</Button> */}
                        {/* <Button classItem={""} onclick={scrollToFooter}>Scroll to somewhere</Button> */}


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

                                {/* FIXME OPTIONAL this button cannot listen for an enter key automatically since `f-form` is listening for it*/}
                                <Button onclick={handleUpload} classItem={isUploadDisabled ? "primary" : "disabled"} disabled={isUploadDisabled ? false : true} tabIndex={3}>
                                    <span>
                                        {
                                            progressValue
                                            // changed since it's a bad practice and quite unreadable
                                            // (progress > 1) ? `(${progress}%)` : (progress === 100) ? "Processing..." : "Upload"
                                        }
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
            </div>
        </>
    );
}

export default Landing;
