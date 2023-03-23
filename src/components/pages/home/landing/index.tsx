import Button from "../../../common/button";
import GirlSmile from "../../../../assets/illus-ok.svg";
import "./landing.scss"


function Landing() {
    
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const fileName = e.target.files && e.target.files[0] && e.target.files[0].name.trim();
        const maxFileNameLength = 13;
        let displayFileName = fileName;
        if (fileName && fileName.length > maxFileNameLength) {
          const fileNameParts = fileName.split('.');
          const fileExtension = fileNameParts.pop();
          const fileNameWithoutExtension = fileNameParts.join('.');
          const shortenedFileNameWithoutExtension = fileNameWithoutExtension.slice(
            0,
            maxFileNameLength - 3
          );
          displayFileName = `${shortenedFileNameWithoutExtension}...${fileExtension}`;
        }
        const label = e.target.previousElementSibling as HTMLLabelElement;
        if (label) {
          label.style.direction = 'rtl';
          label.textContent = displayFileName;
        }
      }
      

    return (
        <div className="f-landing">
            <div className="f-container">
                <div className="f-info">

                    <h1>Effortlessly Share Your Files with Filebliz</h1>
                    <p>With Filebliz, you can easily share your files with anyone, anytime. Our user-friendly platform ensures that you can quickly upload and send your files to your friends, family, and colleagues without any hassle.</p>
                    
                    {/* 
                        [ OPTIONAL FEATURE ]
                        FIXME Accessibility: add redirect function to open the file window when the tab-index has been located by the keyboard
                    
                        to remove: navigate to ./landing.scss > line 46 and delete the line
                    */}

                    <form tabIndex={0}>
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