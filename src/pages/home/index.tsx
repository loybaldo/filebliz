import React from "react";
import { Container } from "react-bootstrap";
import "./home.scss";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Services from "../../components/services";
import Slider from "../../components/slider";
import Upload from "../../components/upload";


function HomePage() {
    return (
        <React.Fragment>
            <Header/>
            <Container className="p-4">
                <Slider/>
                <Upload/>
            </Container>
            <Services/>
            <Footer/>
        </React.Fragment>
    );
}

export default HomePage;