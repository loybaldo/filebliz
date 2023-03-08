import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Title404 from "../../components/title";
import "./404.scss";


function NotFoundPage() {
    return (
        <React.Fragment>
            <Header/>
                <Title404/>
            <Footer/>
        </React.Fragment>
    );
}

export default NotFoundPage;