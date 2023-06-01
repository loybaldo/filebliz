import Collapse from "../../components/common/collapse";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Offers from "../../components/widgets/offers";
import PremiumLanding from "../../components/widgets/premium-landing";
import Campaign from "../../components/widgets/campaign";
import pagetitle from "../.scripts/pagetitle";
import './pricing.scss'


function FAQ() {
    const data = [
        {
            title: "What is Filebliz?",
            desc: "Filebliz is a file-sharing service designed to simplify the process of sharing files for students, teachers, creatives, and small business owners. With its intuitive interface, users can easily upload, share, and manage files, making it an ideal solution for collaborating on group projects or sending essential documents."
        },
        {
            title: "Who has access to my files?",
            desc: "Anyone who has been provided with a link to your files on the internet can access them, but once the file has expired, it will be indicated as such to anyone who tries to access it. Additionally, the file will undergo a thorough and complete purging process from our system to ensure maximum data security for all users."
        },
        {
            title: "Are my files safe?",
            desc: "Our top priorities are your safety, privacy, and the integrity of your uploaded files. As a result, we are taking all reasonable measures to ensure their security."
        },
        {
            title: "Will my files be completely deleted when the time expires?",
            desc: "Yes, your files will be entirely removed from our system once the allotted time limit has been exceeded, as part of our rigorous purging process to maintain system efficiency and optimize resources for all users."
        },
        {
            title: "Do you access or utilize my files in any way?",
            desc: "No, we do not examine or utilize any files that are processed through our solution, unless we receive a report of misuse or violation of our terms of use."
        },
        {
            title: "Can I install and integrate this service onto my devices?",
            desc: "Currently, we do not have any immediate plans for device installation and integration. However, if you have any suggestions or feedback, please feel free to reach out to us at expomawd@gmail.com."
        },
        {
            title: "Have any more questions?",
            desc: "We're always here to help. Visit our social media pages or contact us directly at expomawd@gmail.com"
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