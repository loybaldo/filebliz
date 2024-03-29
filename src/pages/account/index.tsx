import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import AccountHeader from "../../components/widgets/acc-header";
import Navigation from "../../components/common/navigation";
import Status from "../../components/widgets/status";
import UploadList from "../../components/widgets/upload-list";
import pagetitle from "../.scripts/pagetitle";
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


function AccountPage() {
    const { totalUsedStorage, currentUser, memberships, getMembership } = useContext(AuthContext);   
    
    pagetitle.DashboardTitle()
    // const location = useLocation();
    // const { currentUser } = useContext(AuthContext);

    // useEffect(() => {
    //     const APP_NAME = process.env.REACT_APP_NAME;
    //     if (location.pathname === "/account") {
    //         document.title = `${currentUser?.displayName} - ${APP_NAME}`;
    //     }

    //     return () => {
    //         document.title = APP_NAME!;
    //     };
    // },);

    const handleDeleteAll = async () => {
        if (memberships.length > 0) {
            return;
        }
        if ((memberships.length > 0) && (memberships[0].dateExpires - new Date().getTime()) > 0) {
			return;
		}
        const fileRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
        const q = query(fileRef, where("uploader", "==", currentUser?.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    }

    useEffect(() => {
        // handleDeleteAll();
    })

    return (
        <>
            <Navigation />
            <AccountHeader />
            <Status />
            <UploadList />
            <div style={{ height: 100 }}></div>
        </>
    );
}

export default AccountPage;