import Collapse from "../../components/common/collapse";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Offers from "../../components/pages/pricing/offers";
import PremiumLanding from "../../components/pages/pricing/premium-landing";

function PricingPage() {
    const data = [
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."      
        },
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam autem eligendi?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."      
        },
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam autem?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."      
        },
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam autem eligendi culpa est?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."      
        },
        {
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident maiores. Eius odit magni exercitationem neque, impedit nam eligendi reiciendis cum quo! Optio laboriosam accusantium tempora quos alias iste eos unde dolore sit a. Nesciunt officia delectus praesentium porro reprehenderit quam eligendi omnis? Veritatis odio laudantium voluptate officia, tempore inventore error aliquid sunt magnam laboriosam excepturi, iure qui at aperiam illo dolorum, nam ducimus accusamus. Temporibus, hic inventore! Molestias quibusdam odit nobis, minima dolore aliquam minus. Fuga architecto maiores quaerat molestias commodi voluptates debitis aliquam natus tempora nulla itaque sit adipisci quasi deserunt, error cupiditate deleniti doloremque reiciendis! Eum."      
        },
    ]
    return (
        <>
            <Navigation/>
            <div style={{marginTop: 60}}></div>
            <PremiumLanding/>
            <Offers/>
            <div style={{width: "100%", maxWidth: 1320, padding: 20, margin: "0 auto"}}>
                <span style={{marginBottom: 20, display: "flex", fontSize: "x-large"}}>Frequently Ask Questions</span>
                {data.map((item, index) => (<Collapse key={index} title={item.title} desc={item.desc}/>))}
            </div>
            <Footer/>
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default PricingPage;