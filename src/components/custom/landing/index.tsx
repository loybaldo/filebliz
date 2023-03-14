import Button from "../../common/button";
import "./landing.scss"


function Landing() {
    const fileInputStyle = {
        border: "none",
        backgroundColor: "transparent",
        outline: "none"
    }

    return (
        <div className="f-landing">
            <div className="f-container">
                <div className="f-info">

                    <h1>Effortlessly Share Your Files with Fileblizz</h1>
                    <p>With Fileblizz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>
                    
                    {/* 
                        I suggest turning the form into a component instead and leave the rest inside ./Home - Derfel

                        TODO ?Refactor code
                    */}

                    <form>
                        <label htmlFor="file-upload" className="custom-file-upload" style={fileInputStyle}>
                            Choose Files
                            
                            {/*
                                
                                TODO needs extra JS to display file name here 
                                
                                ! - item not focusable/tabbable 

                            */}

                        </label>
                        <input id="file-upload" type="file"/>
                        <Button label="Upload"/>
                    </form>

                </div>
                <div className="f-info"></div>
            </div>
        </div>
    );
}

export default Landing;