import Footer from "../../components/footer";
import Landing from "../../components/landing";
import Services from "../../components/services";
import "./home.scss";


function HomePage() {
    return (
        <>
            <Landing/>
            <Services/>
            <Footer/>
        </>
    );
}

export default HomePage;