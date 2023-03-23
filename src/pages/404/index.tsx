import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import "./not-found.scss";
import NotFoundIllustration from "../../assets/illus-error.svg";
import Button from "../../components/common/button";


function NotFoundPage() {
    return (
        <>
            <Navigation/>

                <div style={{marginTop: 60, padding: 20}}>
                    <div className="f-not-found">
                        <img src={NotFoundIllustration} alt="Not Found Illustration" />
                        <h2>Oops! Page Not Found.</h2>
                        <p>Lorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit amet</p>
                        <Button label="Go Back To Home"/>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default NotFoundPage;