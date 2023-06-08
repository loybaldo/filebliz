import { useContext, useEffect, useState } from "react";
import { collection, where, query, deleteDoc, getDocs, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../auth/auth-provider";
import { db, storage } from "../../../config/firebase";
import Button from "../../common/button";
import ListView from "../list-view";
import "./upload-list.scss";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import Progress from "../../common/progress";

function UploadList() {
	const [uploadFiles, setUploadFiles] = useState<FileList | null>(null);
	const [progress, setProgress] = useState(0);
	const { totalUsedStorage, currentUser, memberships, files, getFiles } = useContext(AuthContext);

	useEffect(() => {
		const unsubscribe = getFiles();
		return unsubscribe;
	}, [getFiles]);

	// =============================================
	//     Delete all files uploaded by the user
	// =============================================
	const handleDeleteAll = async () => {
		const fileRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
		const q = query(fileRef, where("uploader", "==", currentUser?.uid));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach(async (doc) => {
			// Delete file
			const docRef = ref(storage, process.env.REACT_APP_UPLOAD_PATH + "/" + doc.data().genName);
			await deleteObject(docRef);
			// Delete file record
			await deleteDoc(doc.ref);
		});
	}

	const handleUpload = async (fileToUpload: File) => {
		let expiration: number | null = null;
		const MAX_FREE_STORAGE = 2000000000;
        const MAX_PRO_STORAGE = 5000000000;
        const MAX_PREM_STORAGE = 18000000000;
		// Handle upload
		if (memberships.length <= 0) {
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
			if (!allowedTypes.includes(fileToUpload.type)) {
				alert("Free Member\nOnly videos, photos, and documents are allowed.");
				return;
			}
			// Check if there is enough storage for free member.
			if (totalUsedStorage > MAX_FREE_STORAGE ) {
                alert("FREE MEMBER\nFull storage!");
                return;
            }
		}

		// Check if there is enough storage.
		if ((memberships[0].type === "pro") && (totalUsedStorage > MAX_PRO_STORAGE)) {
            alert("PRO MEMBER\nFull storage!");
            return;
        }
        if ((memberships[0].type === "premium") && (totalUsedStorage > MAX_PREM_STORAGE)) {
            alert("PREMIUM MEMBER\nFull storage!");
            return;
        }

		const genID = uuidv4();
		const fileExtension = fileToUpload.name.split(".").pop() || "";
		const genName = uuidv4() + "." + fileExtension;
		const filePath = `${process.env.REACT_APP_UPLOAD_PATH}/${genName}`;
		const fileRef = ref(storage, filePath);

		// Incorporate file data to be passed for a task
		const uploadTask = uploadBytesResumable(fileRef, fileToUpload);

		// Track the upload percentage
		uploadTask.on("state_changed", (snapshot) => {
			const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
			setProgress(+progress);
		}, (err) => {
			console.error(err);
		}, async () => {
			try {
				const downloadURL = await getDownloadURL(fileRef);
				const fileInfo = {
					uploader: currentUser ? currentUser.uid : null,
					id: genID,
					name: fileToUpload.name,
					genName: genName,
					type: fileToUpload.type,
					size: fileToUpload.size,
					expiration: expiration,
					dateUploaded: new Date().toISOString(),
					downloadURL: downloadURL,
				};
				await addDoc(collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!), fileInfo);
				setProgress(0);
			} catch (err) {
				console.error(err);
			}
		});
	};

	useEffect(() => {
		if (uploadFiles && uploadFiles.length > 0) {
			const fileToUpload = uploadFiles[0];
			handleUpload(fileToUpload);
		}
	}, [uploadFiles]);

	// use drag and drop
	const onHover = 'hovering';
	const onHoverOutside = 'notHovering';

	const handleDragOver = (param: string, e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		e.stopPropagation();
		updateLabelWithFileName('Drop Here!');
		const element = document.getElementById("dropdown-location");
			if (element) {
			if (param === 'hovering') {
				updateLabelWithFileName('Ready!');
				element.classList.remove("dragging-over");
				element.classList.add("dragging-over-active");
			} else if (param === 'notHovering') {
				element.classList.remove("dragging-over-active");
				element.classList.add("dragging-over");
			}
		}
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		e.stopPropagation();

		updateLabelWithFileName('Choose a File');
		removeClass();
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const files = e.dataTransfer.files;
			if (files != null && files.length > 0) {
			setUploadFiles(files);
			const fileName = files[0].name.trim();
			updateLabelWithFileName(fileName);
		}
		removeClass();
	};

	const removeClass = () => {
		const element = document.getElementById("dropdown-location");
		if (element) {
			element.classList.remove("dragging-over");
			element.classList.remove("dragging-over-active");
		}
	};

	const updateLabelWithFileName = (fileName: string) => {
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
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			setUploadFiles(files);
		}
	};

	return (
		<>
			<Progress show={progress > 0} percent={progress} />
			<div className="f-upload-box" onDragOver={(e) => handleDragOver(onHoverOutside, e)} onDragLeave={handleDragLeave}>
				<div
					className="drop-area"
					id="dropdown-location"
					onDragOver={(e) => handleDragOver(onHover, e)}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}>
					<label htmlFor="file-upload" className="account-file-upload" style={{ display: "flex", justifyContent: "center" }}>
						<i className="fa-regular fa-cloud-arrow-up" style={{ marginRight: 15, fontSize: "x-large" }}></i>
						<span id="file-label">Drop Files Here</span>
						<input id="file-upload" type="file" onChange={handleChange} />
					</label>
				</div>
			</div>

			<div className="f-upload-list">
				<div className="f-del-all-wrapper">
					<span className="f-label">Uploaded ({files.length})</span>
					<Button onclick={handleDeleteAll} classItem={"danger"}>
						Delete All
					</Button>
				</div>
				{files.length === 0 ? (<div className="f-upload-list-no-data"><p>No Uploaded Files</p></div>) : null}
				{files.map((file) => (
				<ListView
					key={Math.random()}
					id={file.id}
					docId={file.docId}
					fileName={file.name}
					genFileName={file.genName}
					size={file.size}
					fileExt={file.type.split("/")[1]}
					url={file.downloadURL}
					date={file.dateUploaded.split("T")[0]}
				/>
				))}
			</div>
		</>
	);
}

export default UploadList;
