import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import './about.scss';


function About() {
    const location = useLocation();

    useEffect(() => {
        const APP_NAME = process.env.REACT_APP_NAME;
        if (location.pathname === "/about") {
            document.title = `About - ${APP_NAME}`;
        }

        return () => {
            document.title = APP_NAME!;
        };
    }, [location]);
    
    return (
        <>
            <Navigation />
            <h1 className="h1">Empty</h1>
            <Footer />
        </>
    );
}

export default About;