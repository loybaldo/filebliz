import Footer from "../../components/footer";
import Landing from "../../components/landing";
import Navigation from "../../components/navigation";
import Services from "../../components/services";
import "./home.scss";


function HomePage() {
    return (
        <>
            <Navigation/>
            <div style={{marginTop: 70}}></div>
            
            <div className="mainView">
                <Landing/>
                <Services/>
            </div>

            <Footer/>
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default HomePage;