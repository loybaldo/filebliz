import PricingCard from "../pricing-card";
import "./offers.scss";


function Offers() {
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
    
    return (
        <div className="f-offers">
            <PricingCard type="free" price={0} features={data.free} action={false}/>
            <PricingCard type="pro" price={10} features={data.pro}/>
            <PricingCard type="premium" price={18} features={data.premium}/>
        </div>
    );
}

export default Offers;