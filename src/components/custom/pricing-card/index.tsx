import Button from "../../common/button";
import Divider from "../divider";
import Icon from "../icon";
import Icons from "../icon/Icon";
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
            <span> {price} /month</span>
            <p> {shortDesc} </p>
            <Divider/>
            <u>
                <li><Icon icon={Icons.check_circle_outline_bold}/> Lorem ipsum</li>
                <li><Icon icon={Icons.check_circle_outline_bold}/> Lorem ipsum</li>
                <li><Icon icon={Icons.check_circle_outline_bold}/> Lorem ipsum</li>
                <li><Icon icon={Icons.check_circle_outline_bold}/> Lorem ipsum</li>
            </u>
            {(action) ? (<Button label="Purchase"/>) : null}
        </div>
    );
}

export default PricingCard;