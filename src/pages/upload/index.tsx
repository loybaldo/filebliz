import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import Upload from "../../components/upload";


function UploadPage() {
    return (
        <React.Fragment>
            <Header/>
            <Container className="p-4">
                <Upload/>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default UploadPage;