import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import "./404.scss";
import { Button, Container } from "react-bootstrap";


function NotFoundPage() {
    return (
        <React.Fragment>
            <Header/>
            <Container className="p-5 mb-5 text-center">
                <img width="100%" src={require("../../assets/illustrations/404_error_cute_cat.png")}
                    alt="404 illustration"
                    style={{maxWidth: 350, minWidth: 250}}/>
                <h1>Not Found</h1>
                <p>The page you were looking for does not exist.</p>
                <Button href="/" style={{borderRadius: 15}} className="mt-2">Go Back to Home</Button>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default NotFoundPage;