import Button from "../common/button";
import "./landing.scss"


function Landing() {
    return (
        <div className="f-landing">
            <div className="f-container">
                <div className="f-info">
                    <h1>Effortlessly Share Your Files with Fileblizz</h1>
                    <p>With Fileblizz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>
                    <form>
                        <input type="file"/>
                        <Button label="Upload"/>
                    </form>
                </div>
                <div className="f-info"></div>
            </div>
        </div>
    );
}

export default Landing;