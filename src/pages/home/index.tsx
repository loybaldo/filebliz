import Advert from "../../components/pages/home/advert";
import Footer from "../../components/common/footer";
import Landing from "../../components/pages/home/landing";
import Navigation from "../../components/common/navigation";
import Services from "../../components/pages/home/services";
import "./home.scss";
import Feedbacks from "../../components/pages/home/feedbacks";


function HomePage() {
    return (
        <>
            <Navigation/>
            <div className="mainView">
                <Landing/>
                <Services/>
                <div style={{padding: "0 20px"}}>
                    <Advert/>
                </div>
                <Feedbacks/>
            </div>
            <Footer/>
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default HomePage;