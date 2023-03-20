import PricingCard from "../pricing-card";
import "./offers.scss";


function Offers() {
    return (
        <div className="f-offers">
            <PricingCard type="free" price={0} shortDesc="For Getting Started" features={["Lorem ipsum", "Dolor sit amet"]} action={false}/>
            <PricingCard type="pro" price={10} shortDesc="For Getting Started" features={["Lorem ipsum", "Dolor sit amet"]}/>
            <PricingCard type="premium" price={18} shortDesc="For Getting Started" features={["Lorem ipsum", "Dolor sit amet"]}/>
        </div>
    );
}

export default Offers;