import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";


function LoginPage() {
    return (
        <React.Fragment>
            <Header/>
            <Container className="p-5">
                <h1>Login Page!</h1>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default LoginPage;