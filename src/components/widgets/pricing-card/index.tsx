import { useContext } from "react";
import { usePayPalScriptReducer, PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { addDoc, collection } from "firebase/firestore";
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js";
import { db } from "../../../config/firebase";
import { AuthContext } from "../../../auth/auth-provider";
import Icon from "../../common/icon";
import Icons from "../../common/icon/Icon";
import Loader from "../../common/loader";
import "./pricing-card.scss";


interface PricingCardInterface {
    type: "free" | "pro" | "premium";
    price: number;
    features: string[];
    action?: boolean;
}

interface PaypalButtonInterface {
    type: "free" | "pro" | "premium";
    price: number;
}

// ============================================
//     A component for Paypal button
// ============================================
function PaypalButton(props: PaypalButtonInterface) {
    const { currentUser } = useContext(AuthContext);
    const [{ isPending, isRejected }] = usePayPalScriptReducer();

    // =============================================
	//     This will create the order of the user
	// =============================================
    const handleCreateOrder = async (data: any, actions: any) => {
        console.log(currentUser?.uid);
        const order = await actions?.order?.create({
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: props.price.toString(),
                },
            }],
        });
        return order;
    };

    // ====================================================================
	//     This will check and handle if the user approved the payment
	// ====================================================================
    const handleOnApproved = async (data: OnApproveData, actions: OnApproveActions) => {
        const currentDate = new Date();
        const proExpiration = new Date(currentDate.setMonth(currentDate.getMonth() + parseInt(process.env.REACT_APP_PRO_EXPIRATION_MONTHS!))).getTime();
        const premiumExpiration = new Date(currentDate.setFullYear(currentDate.getFullYear() + parseInt(process.env.REACT_APP_PREMIUM_EXPIRATION_YEARS!))).getTime();
        const purchaseInfo = {
            userId: currentUser?.uid,
            type: props.type,
            usedStorage: 0,
            datePurchased: new Date().getTime(),
            dateExpires: (props.type === "pro") ? proExpiration : premiumExpiration,
        }
        await addDoc(collection(db, process.env.REACT_APP_PURCHASE_TABLE!), purchaseInfo);
    }

    return (
        <>
            {(isPending || isRejected) ? <Loader /> : null}
            <PayPalButtons
                style={{ layout: "horizontal", height: 38, shape: "pill", tagline: true }}
                createOrder={handleCreateOrder}
                onApprove={handleOnApproved} />
        </>
    )
}

// ===================================
//     Pricing Card Component
// ===================================
function PricingCard(props: PricingCardInterface) {
    return (
        <div className="f-pricing-card">
            <div style={{ padding: 25, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span> {props.type} </span>
                <span> <b>${props.price}</b> Per Month</span>
                <ul>
                    {props.features.map((item, index) => (<li key={index}><Icon icon={Icons.check_circle} /> {item} </li>))}
                </ul>
                {(!props.action) ? null :
                    (<PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID! }}>
                        <PaypalButton type={props.type} price={props.price} />
                    </PayPalScriptProvider>)}
            </div>
        </div>
    );
}

export default PricingCard;