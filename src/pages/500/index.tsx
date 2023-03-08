import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import "./500.scss"


function InternalServerErrorPage() {
    return (
        <React.Fragment>
            <Header/>
            <Container className="p-5 mb-5 text-center">
                <img width="100%" src={require("../../assets/illustrations/500_server_error_cute_dog.png")}
                    alt="404 illustration"
                    style={{maxWidth: 350, minWidth: 250}}/>
                <h1>Oops! Something went wrong</h1>
                <p>Our team has been notified of the issue and is working hard to resolve it as soon as possible. Please try again later. We apologize for any inconvenience.</p>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default InternalServerErrorPage;