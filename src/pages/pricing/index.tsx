import { useEffect } from "react";
import { useLocation, } from "react-router-dom";
import Collapse from "../../components/common/collapse";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Offers from "../../components/widgets/offers";
import PremiumLanding from "../../components/widgets/premium-landing";
import Campaign from "../../components/widgets/campaign";
import './pricing.scss'
import pagetitle from "../.scripts/pagetitle";


function FAQ() {
    const data = [
        {
            title: "What is Filebliz?",
            desc: "Add a brief, concise, and engaging description or answer here."
        },
        {
            title: "How are files stored?",
            desc: "Sus."
        },
        {
            title: "Will my files be completely deleted when the time expires?",
            desc: "Let our Head Dev rewrite this section."
        },
        {
            title: "Where the hell is our FAQ info!?",
            desc: "Please provide us on what to put here in a document for thanks. I will spam Lorem Ipsum everywhere. In fact... I'll do it right now. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    return (
        <>
            <div className="f-faq-container">
                <span>
                    Frequently Asked Questions
                </span>
                {
                    data.map((item, index) => (
                        <Collapse key={index} title={item.title} desc={item.desc} />
                    ))
                }
            </div>
        </>
    );
}

function PricingPage() {
    pagetitle.PremiumTitle()
    // const location = useLocation();

    // useEffect(() => {
    //     const APP_NAME = process.env.REACT_APP_NAME;
    //     if (location.pathname === "/premium") {
    //         document.title = `Premium - ${APP_NAME}`;
    //     }

    //     return () => {
    //         document.title = APP_NAME!;
    //     };
    // }, [location]);


    return (
        <>
            <Navigation />

            <div className="f-premium-parent">
                <PremiumLanding />
                <Offers />
            </div>
            <FAQ />
            <Campaign />
            <Footer />
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default PricingPage;