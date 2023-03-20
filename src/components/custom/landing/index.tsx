import Button from "../../common/button";
import "./landing.scss"
import GirlSmile from "../../../assets/illus-ok.svg";


function Landing() {
    
    function handleFileChange(e: any) {
        const fileName = e.target.files[0].name;
        const label = e.target.previousElementSibling;
        label.style.direction = 'rtl';
        label.textContent = fileName;
    }

    return (
        <div className="f-landing">
            <div className="f-container">
                <div className="f-info">

                    <h1>Effortlessly Share Your Files with Fileblizz</h1>
                    <p>With Fileblizz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>
                    <form>
                        <label htmlFor="file-upload" className="custom-file-upload" style={{border: "none", backgroundColor: "transparent", outline: "none"}}>
                            Choose Files
                        </label>
                        <input id="file-upload" type="file" onChange={handleFileChange}/>
                        <Button label="Upload"/>
                    </form>

                </div>
                <div className="f-info">
                    <img src={GirlSmile} alt="Girl Smile" />
                </div>
            </div>
        </div>
    );
}

export default Landing;