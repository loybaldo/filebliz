import { collection, where, query, onSnapshot, DocumentData, orderBy, deleteDoc, getDocs } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../auth/auth-provider";
import { db } from "../../../config/firebase";
import Button from "../../common/button";
import ListView from "../list-view";
import "./upload-list.scss";


function UploadList() {
    const { currentUser, files, getFiles } = useContext(AuthContext);

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
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    }

    return (
        <>
        {console.log(currentUser)}
        <div className="f-upload-list">
            <div className="f-del-all-wrapper">
                <span className="f-label">Uploaded ({files.length})</span>
                <Button onclick={handleDeleteAll} classItem={"danger"}> Delete All </Button>
            </div>
            {(files.length === 0) ?
                (<div className="f-upload-list-no-data">
                    <p>No Uploaded Files</p>
                </div>) : null}
            {files.map((file) => (<ListView key={Math.random()} id={file.id} fileName={file.name} size={file.size} fileExt={file.type.split("/")[1]} url={file.downloadURL} date={file.dateUploaded.split("T")[0]} />))}
        </div>
        </>
    );
}

export default UploadList;