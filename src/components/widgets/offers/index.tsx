import { useContext } from "react";
import { AuthContext } from "../../../auth/auth-provider";
import PricingCard from "../pricing-card";
import "./offers.scss";


function Offers() {
    const { memberships, currentUser } = useContext(AuthContext);
    const data = {
        free: [
            "Send up to 2GB",
            "File expires in 7 days",
            "Photos, videos, and docs only",
            "Share to anyone"
        ],
        pro: [
            "Send up to 5Gb",
            "No file expiration",
            "All file type can be uploaded",
            "Share to anyone"
        ],
        premium: [
            "Send up to 10Gb",
            "No file expiration",
            "All file type can be uploaded",
            "Share to anyone"
        ]
    }

    // ============================================
	//     Check the validity of user membership
	// ============================================
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
            <div className="f-offers">
                <PricingCard type="free" price={0} features={data.free} action={false} />
                <PricingCard type="pro" price={2.99} features={data.pro} action={(!isMembershipValid() && currentUser) ? true : false} />
                <PricingCard type="premium" price={5.99} features={data.premium} action={(!isMembershipValid() && currentUser) ? true : false} />
            </div>
        </>
    );
}

export default Offers;