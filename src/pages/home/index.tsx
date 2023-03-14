import Advert from "../../components/advert";
import Footer from "../../components/footer";
import Landing from "../../components/landing";
import Navigation from "../../components/navigation";
import Services from "../../components/services";
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