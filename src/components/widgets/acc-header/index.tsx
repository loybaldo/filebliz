import { useCallback, useContext, useEffect, useState } from "react";
import { DocumentData, collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import DefaultProfilePic from "../../../assets/default-profile.svg";
import "./acc-header.scss";
import { AuthContext } from "../../../auth/auth-provider";
import { db } from "../../../config/firebase";


function AccountHeader() {
    const { currentUser } = useContext(AuthContext);
    const [memberships, setMemberships] = useState<DocumentData>([]);

    // Get the user membership records.
    const getMembership = useCallback(() => {
        const filesRef = collection(db, process.env.REACT_APP_PUCHASE_TABLE!);
        const q = query(filesRef, where("userId", "==", currentUser?.uid), orderBy("datePurchased", "desc"));
        const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
            const membershipList = snapshot.docs.map((doc) => doc.data());
            setMemberships(membershipList);
        });
        return unsubscribe;
    }, [currentUser?.uid])

    useEffect(() => {
        const unsubscribe = getMembership();
        return unsubscribe;
    }, [getMembership]);

    // May bugs.... Balikan ra nako ni, kay mag return siya ug 13 months bisan 1 year ang expiration.
    const handleMembershipTimeLeft = () =>{
        const dateExpires = new Date(memberships[0].dateExpires);
        const diffTime = dateExpires.getTime() - Date.now();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 29) {
            return `Expires in ${diffDays} days`;
        } else {
            const diffMonths = Math.floor(diffDays / 30);
            return `Expires in ${diffMonths} months`;
        }
    }

    return(
        <>
            <div className="f-acc-bg"></div>
            <div className="f-prof-container">
                <div>
                    <img src={(currentUser?.photoURL) ? currentUser?.photoURL! : DefaultProfilePic} alt={currentUser?.displayName!} />
                    <span>{currentUser?.displayName}</span>
                </div>
                <div>
                    <span>{(memberships.length > 0) ? `${memberships[0]?.type} member` : "Free Member"}</span>
                    <span>{(memberships.length > 0) ? handleMembershipTimeLeft() : "--"}</span>
                </div>
            </div>
        </>
    );
}

export default AccountHeader;