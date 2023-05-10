import "./home.scss";
import Advert from "../../components/widgets/advert";
import Footer from "../../components/common/footer";
import Landing from "../../components/widgets/landing";
import Navigation from "../../components/common/navigation";
import Services from "../../components/widgets/services";
import Feedbacks from "../../components/widgets/feedbacks";
import Campaign from "../../components/widgets/campaign";


function HomePage() {
    return (
        <>
            <Navigation />
            <div className="mainView">
                <Landing />
                <Services />
                <Feedbacks />
                <Advert />
                <Campaign />
            </div>
            <Footer />
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default HomePage;