import { useContext, useEffect, useState } from "react";
import { collection, where, query, deleteDoc, getDocs, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../auth/auth-provider";
import { db, storage } from "../../../config/firebase";
import Button from "../../common/button";
import ListView from "../list-view";
import "./upload-list.scss";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";


function UploadList() {
	const [uploadFiles, setUploadFiles] = useState<File | null>(null);
	const [progress, setProgress] = useState(0);
	const { currentUser, memberships, files, getFiles } = useContext(AuthContext);

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
			console.log(doc.data().name);
			// Delete file
			const docRef = ref(storage, process.env.REACT_APP_UPLOAD_PATH + "/" + doc.data().genName);
			await deleteObject(docRef);
			// Delete file record
			await deleteDoc(doc.ref);
		});
	}

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const filesToUpload = e.target.files;
		if (!filesToUpload || filesToUpload.length === 0) {
			return;
		}

		const fileToUpload = filesToUpload[0];

		// Handle upload
		if (memberships.length <= 0) {
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
		}

		const genID = uuidv4();
		const fileExtension = fileToUpload.name.split(".").pop() || "";
		const genName = uuidv4() + "." + fileExtension;
		const filePath = `${process.env.REACT_APP_UPLOAD_PATH}/${genName}`;
		const fileRef = ref(storage, filePath);

		// Incorporate file data to be passed for a task
		const uploadTask = uploadBytesResumable(fileRef, fileToUpload);

		// Track the upload percentage
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(1);
				setProgress(+progress);
				// ======================================
				//    Set Upload indicator or a loader
				// ======================================
			},
			(err) => {
				console.error(err);
			},
			async () => {
				try {
					const downloadURL = await getDownloadURL(fileRef);
					const fileInfo = {
						uploader: currentUser ? currentUser.uid : null,
						id: genID,
						name: fileToUpload.name,
						genName: genName,
						type: fileToUpload.type,
						size: fileToUpload.size,
						dateUploaded: new Date().toISOString(),
						downloadURL: downloadURL,
					};
					await addDoc(collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!), fileInfo);
				} catch (err) {
					console.error(err);
				}
			}
		);
	};

	// use drag and drop
	const onHover = 'hovering';
	const onHoverOutside = 'notHovering';
	const element = document.getElementById("dropdown-location");

	// =============================================
	//     		  Handle Drag and Drop
	// =============================================
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
		// setIsUploadDisabled(true);

		const files = e.dataTransfer.files;
		if (files != null && files.length > 0) {
			// FIXME: trigger upload here
			setUploadFiles(files[0]);
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


	return (
		<>
			<div className="f-upload-box" onDragOver={(e) => handleDragOver(onHoverOutside, e)} onDragLeave={handleDragLeave}>
				<div className="drop-area"
					id="dropdown-location"
					onDragOver={(e) => handleDragOver(onHover, e)}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>

					<label htmlFor="file-upload" className="account-file-upload" style={{ display: "flex", justifyContent: "center" }}>
						<i className="fa-regular fa-cloud-arrow-up" style={{ marginRight: 15, fontSize: "x-large" }}></i>
						<span id="file-label">Drop Files Here</span>
						<input id="file-upload" type="file" onChange={handleUpload} />
					</label>

				</div>
			</div>


			<div className="f-upload-list">
				<div className="f-del-all-wrapper">
					<span className="f-label">Uploaded ({files.length})</span>
					<Button onclick={handleDeleteAll} classItem={"danger"}> Delete All </Button>
				</div>
				{(files.length === 0) ?
					(<div className="f-upload-list-no-data">
						<p>No Uploaded Files</p>
					</div>) : null}
				{files.map((file) => (<ListView key={Math.random()} id={file.id} docId={file.docId} fileName={file.name} genFileName={file.genName} size={file.size} fileExt={file.type.split("/")[1]} url={file.downloadURL} date={file.dateUploaded.split("T")[0]} />))}
			</div>
		</>
	);
}

export default UploadList;