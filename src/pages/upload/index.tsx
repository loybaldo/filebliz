import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";


function UploadPage() {
    return (
        <React.Fragment>
            <Header/>
            <Container className="p-5">
                <h1>Upload Page!</h1>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default UploadPage;