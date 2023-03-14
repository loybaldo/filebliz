import Advert from "../../components/custom/advert";
import Footer from "../../components/custom/footer";
import Landing from "../../components/custom/landing";
import Navigation from "../../components/custom/navigation";
import Services from "../../components/custom/services";
import "./home.scss";


function HomePage() {
    return (
        <>
            <Navigation/>
            <div style={{marginTop: 60}}></div>
            
            <div className="mainView">
                
                <Landing/>
                <Services/>
                
                <div style={{padding: "0 20px"}}>
                    <Advert/>
                </div>
            </div>

            <Footer/>
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default HomePage;