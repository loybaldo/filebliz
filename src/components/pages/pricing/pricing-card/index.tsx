import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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
                <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID! }}>
                    <PayPalButtons 
                        style={{ layout: "horizontal", height: 38, shape: "pill", tagline: true }}
                        createOrder={(data, actions) => {
                            return actions.order
                                .create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: "USD",
                                                value: "18",
                                            },
                                        },
                                    ],
                                })
                                .then((orderId) => {
                                    // Your code here after create the order
                                    return orderId;
                                });
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}

export default PricingCard;