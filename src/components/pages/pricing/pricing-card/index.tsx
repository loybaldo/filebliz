import Button from "../../../common/button";
import Icon from "../../../common/icon";
import Icons from "../../../common/icon/Icon";
import "./pricing-card.scss";


interface PricingCardInterface {
    type: "free" | "pro" | "premium";
    price: number;
    shortDesc: string;
    features: string[];
    action?: boolean;
}

function PricingCard({type, price, shortDesc, features, action = true}: PricingCardInterface) {
    return(
        <div className="f-pricing-card">
            <span> {type} </span>
            <span> <b>{price}</b> Per Month</span>
            <p> {shortDesc} </p>
            <u>
                <li><Icon color="#46BC4A" icon={Icons.check_circle}/> Lorem ipsum dolor sit amet cons ectetur.</li>
                <li><Icon icon={Icons.check_circle}/> Lorem ipsum dolor sit amet con sectetur.</li>
                <li><Icon icon={Icons.check_circle}/> Lorem ipsum dolor sit amet con sectetur.</li>
                <li><Icon icon={Icons.check_circle}/> Lorem ipsum dolor sit amet con sectetur.</li>
                <li><Icon icon={Icons.check_circle}/> Lorem ipsum dolor sit amet con sectetur.</li>
            </u>
            {(action) ? (<Button style={{margin:"25px"}} label="Purchase"/>) : null}
        </div>
    );
}

export default PricingCard;