import Button from "../../../common/button";
import Icon from "../../../common/icon";
import Icons from "../../../common/icon/Icon";
import "./pricing-card.scss";


interface PricingCardInterface {
    type: "free" | "pro" | "premium";
    price: number;
    features: string[];
    action?: boolean;
}

function PricingCard({type, price, features, action = true}: PricingCardInterface) {
    return(
        <div className="f-pricing-card">
            <div style={{padding: 25, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <span> {type} </span>
                <span> <b>${price}</b> Per Month</span>
                <ul>
                    {features.map((item, index) => (<li key={index}><Icon icon={Icons.check_circle}/> {item} </li>))}
                </ul>
                {(action) ? (<Button style={{ margin: "25px" }} label="Purchase" scrollToTop={false}/>) : null}
            </div>
        </div>
    );
}

export default PricingCard;