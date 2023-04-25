import { useContext } from "react";
import { AuthContext } from "../../../auth/auth-provider";
import DefaultProfilePic from "../../../assets/default-profile.svg";
import "./acc-header.scss";



function AccountHeader() {
    const { currentUser, memberships } = useContext(AuthContext);

    // May bugs.... Balikan ra nako ni, kay mag return siya ug 13 months bisan 1 year ang expiration. | chatgpt mo lang yan xD
    const handleMembershipTimeLeft = () => {
        const daysInMonth = 30;
        const dateExpires = new Date(memberships[0].dateExpires);
        const diffTime = dateExpires.getTime() - Date.now();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
        if (diffDays < daysInMonth) {
            return `Expires in ${diffDays} days`;
        } else {
            const diffMonths = Math.floor(diffDays / 30);
            // No idea why :C
            // Gi minus 1 na lang nako XD
            return `Expires in ${diffMonths - 1} months`;
        }
    }
    
      

    return (
        <>
        {console.log(memberships[0])}
            <div className="f-acc-bg"></div>
            <div className="f-prof-container">
                <div>
                    {/* INFO: 'currentUser?.photoURL' this code occasionally throws 403 error, consider encasing it with a try & catch? or with a for/while loop?*/}
                    <img draggable="false" src={(currentUser?.photoURL) ? currentUser?.photoURL! : DefaultProfilePic} alt={currentUser?.displayName!} />
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