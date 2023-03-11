import React from "react";
import env from "react-dotenv";
import "./home.scss";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Services from "../../components/services";
import Slider from "../../components/slider";


function HomePage() {
    return (
        <React.Fragment>
            <Header/>
            <Slider/>
            <Services/>
            <Footer/>
        </React.Fragment>
    );
}

export default HomePage;