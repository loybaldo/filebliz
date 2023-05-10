import { useEffect } from "react";
import "./not-found.scss";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Button from "../../components/common/button";
import NotFoundIllustration from "../../assets/illus-error.svg";
import { useNavigate } from "react-router-dom";


function NotFoundPage() {
    useEffect(() => {
        const APP_NAME = process.env.REACT_APP_NAME;
        document.title = "404 - Page Not Found";
        return () => {
            document.title = APP_NAME!;
        };
    }, []);

    const history = useNavigate();

    let handleClick = () => {
        history('/');
    };

    return (
        <>
            <Navigation />

            <div>
                <div className="f-not-found">
                    <img draggable="false" src={NotFoundIllustration} alt="Not Found Illustration" />
                    <h2>Oops! Page Not Found.</h2>
                    <p>Sorry, the page you are looking for cannot be found. Please check the URL or go back to the homepage.</p>
                    <Button onclick={handleClick} classItem={"primary"}>Go Back To Home</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFoundPage;