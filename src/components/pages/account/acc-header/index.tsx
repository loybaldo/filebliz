import { useContext } from "react";
import DefaultProfilePic from "../../../../assets/default-profile.svg";
import "./acc-header.scss";
import { AuthContext } from "../../../../auth/auth-provider";


function AccountHeader() {
    const { currentUser } = useContext(AuthContext);

    return(
        <>
            <div className="f-acc-bg"></div>
            <div className="f-prof-container">
                <div>
                    <img src={(currentUser?.photoURL) ? currentUser?.photoURL! : DefaultProfilePic} alt={currentUser?.displayName!} />
                    <span>{currentUser?.displayName}</span>
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