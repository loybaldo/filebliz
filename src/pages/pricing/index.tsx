import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Offers from "../../components/pages/pricing/offers";
import PremiumLanding from "../../components/pages/pricing/premium-landing";

function PricingPage() {
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

export default PricingPage;