import { useContext } from "react";
import { AuthContext } from "../../../auth/auth-provider";
import PricingCard from "../pricing-card";
import "./offers.scss";


function Offers() {
    const { memberships, currentUser } = useContext(AuthContext);
    const data = {
        free: [
            "Send up to 100Mb",
            "Expires in 7 days",
            "Photos, videos, and docs only",
            "Share to anyone"
        ],
        pro: [
            "Send up to 3Gb",
            "Expires in 30 days",
            "All file type can be uploaded",
            "Share to anyone"
        ],
        premium: [
            "Send up to 10Gb",
            "Expires in 12 months",
            "All file type can be uploaded",
            "Share to anyone"
        ]
    }

    const isMembershipValid = () => {
        if (currentUser === null) { return false };
        if (memberships.length <= 0) { return false };

        const { dateExpires, datePurchased } = memberships[0];
        const remainingTime = dateExpires - datePurchased;
        if ((remainingTime < 0)) { return false };
        return true;
    }
    
    return (
        <>
            {console.log(currentUser === null)}
            {console.log(isMembershipValid())}
            <div className="f-offers">
                <PricingCard type="free" price={0} features={data.free} action={false}/>
                <PricingCard type="pro" price={10} features={data.pro} action={(!isMembershipValid() && currentUser) ? true : false}/>
                <PricingCard type="premium" price={18} features={data.premium} action={(!isMembershipValid() && currentUser) ? true : false}/>
            </div>
        </>
    );
}

export default Offers;