import "./acc-header.scss";
import DefaultProfilePic from "../../../assets/default-profile.svg";


function AccountHeader() {
    return(
        <>
            <div className="f-acc-bg"></div>
            <div className="f-prof-container">
                <div>
                    <img src={DefaultProfilePic} alt="Profile"/>
                    <span>Istoy Batitoy</span>
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