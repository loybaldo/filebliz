import Divider from "../../components/custom/divider";
import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import "./not-found.scss";


function NotFoundPage() {
    return (
        <>
            <Navigation/>
            
                <div className="notFoundHeader">
                    <h1 className="codeName">404</h1>

                    <Divider/>

                    <h1>Page Not Found!</h1>
                </div>
            
            <Footer/>
        </>
    );
}

export default NotFoundPage;