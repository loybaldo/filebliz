import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Collapse from "../../components/common/collapse";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Offers from "../../components/widgets/offers";
import PremiumLanding from "../../components/widgets/premium-landing";
import './pricing.scss'


function FAQ() {
    const data = [
        {
            title: "Frequently Asked Questions 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."
        },
        {
            title: "Frequently Asked Questions 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."
        },
        {
            title: "Frequently Asked Questions 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."
        }
    ];

    return (
        <>
            <div className="f-faq-container">

                <span>
                    Frequently Ask Questions
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
    const location = useLocation();

    useEffect(() => {
        const APP_NAME = process.env.REACT_APP_NAME;
        if (location.pathname === "/premium") {
            document.title = `Premium - ${APP_NAME}`;
        }

        return () => {
            document.title = APP_NAME!;
        };
    }, [location]);


    return (
        <>
            <Navigation />
            <div style={{ marginTop: 60 }}></div>
            <PremiumLanding />
            <Offers />
            <FAQ />
            <Footer />
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default PricingPage;