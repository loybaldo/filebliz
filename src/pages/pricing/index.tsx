import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import Offers from "../../components/custom/offers";
import PremiumLanding from "../../components/custom/premium-landing";

function Pricing() {
    return (
        <>
            <Navigation/>
            <div style={{marginTop: 60}}></div>
            <PremiumLanding/>
            <Offers/>
            <Footer/>
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default Pricing;