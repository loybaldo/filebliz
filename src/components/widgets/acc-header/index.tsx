import { useContext } from "react";
import { AuthContext } from "../../../auth/auth-provider";
import DefaultProfilePic from "../../../assets/default-profile.svg";
import "./acc-header.scss";


function AccountHeader() {
    const { currentUser, memberships } = useContext(AuthContext);

    // =================================================
	//     Calculate the expiration of membership
	// =================================================
    const handleMembershipTimeLeft = () => {
        const daysInMonth = 30;
        const dateExpires = new Date(memberships[0].dateExpires);
        const diffTime = dateExpires.getTime() - Date.now();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
        if (memberships[0].type === "pro") {
            if (diffDays === 1) {
                return "Expires in 1 day";
            } else {
                return `Expires in ${diffDays} days`;
            }
        } else if (memberships[0].type === "premium") {
            const diffMonths = Math.floor(diffDays / daysInMonth);
            const remainingDays = diffDays % daysInMonth;
    
            const monthsText = diffMonths === 1 ? 'month' : 'months';
            const daysText = remainingDays === 1 ? 'day' : 'days';
    
            if (diffMonths === 0) {
                return `Expires in ${remainingDays} ${daysText}`;
            } else if (remainingDays === 0) {
                return `Expires in ${diffMonths} ${monthsText}`;
            } else {
                return `Expires in ${diffMonths - 1} ${monthsText}`;
            }
        }
    
        return '';
    };
    
    
    
    

    return (
        <>
            <div className="f-acc-bg"></div>
            <div className="f-prof-container">
                <div>
                    <img draggable="false" src={(currentUser?.photoURL) ? currentUser?.photoURL! : DefaultProfilePic} alt={currentUser?.displayName!} />
                    <span>{(currentUser?.displayName) ? currentUser?.displayName : currentUser?.email}</span>
                    <div className="icon-container">
                        <button className="icon-button" title="Change Profile">
                            <i className="fa-regular fa-arrows-rotate"></i>
                        </button>
                    </div>


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