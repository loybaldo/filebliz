import { useEffect, useState } from "react";
import DefaultProfilePic from "../../../assets/default-profile.svg";
import "./acc-header.scss";
import { auth } from "../../../config/firebase";
import { User } from "firebase/auth";


function AccountHeader() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return(
        <>
            <div className="f-acc-bg"></div>
            <div className="f-prof-container">
                <div>
                    <img src={(user?.photoURL) ? user?.photoURL! : DefaultProfilePic} alt="Profile" />
                    <span>{user?.displayName}</span>
                </div>
                <div>
                    <span>Premium member</span>
                    <span>Expires in 23 days</span>
                </div>
            </div>
        </>
    );
}

export default AccountHeader;