import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import "./not-found.scss";


function NotFoundPage() {
    return (
        <>
            <Navigation/>

                <div style={{marginTop: 60, padding: 20}}>
                    <div className="f-not-found">
                        <img src={require("../../assets/logo512.png")} alt="Not Found Illustration" />
                        <h2>Oops! Page Not Found.</h2>
                        <p>Lorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit amet</p>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default NotFoundPage;