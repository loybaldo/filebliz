import { Link, useNavigate } from "react-router-dom";
import "./footer.scss";
import Button from "../button";
import Divider from "../divider";


function Footer() {
    const appFirstPublished = parseInt(process.env.REACT_APP_FIRST_PUBLISHED!);
    const history = useNavigate();

    const handleClick = () => {
        history('/');
        window.scrollTo(0, 0);
        
    };

    const handleClickA = () => {
        window.scrollTo(0, 0);
      };

    return (
        <footer className="f-footer" id="footer">
            <div className="f-container main">
                <Button classItem="f-branding" onclick={handleClick}>
                    <img draggable="false" src={require("../../../assets/logo-full192.png")} alt="Filebliz Logo" />
                    <span>FILEBLIZ</span>
                </Button>
                <span>
                    Filebliz, &copy; Copyright {appFirstPublished} {((new Date().getFullYear()) > appFirstPublished) ? ` - ${new Date().getFullYear()}` : null} - All Rights Reserved.
                </span>
                <div>
                    <Divider />
                    <span><i className="fa-regular fa-location-dot" style={{width: 35, textAlign: "center"}}></i> Mindanao, Philippines</span>
                    <span><i className="fa-regular fa-phone" style={{width: 35, textAlign: "center"}}></i> +63921-738-0430</span>
                    <span><i className="fa-regular fa-envelope" style={{width: 35, textAlign: "center"}}></i> expomawd@gmail.com</span>
                </div>

                <div className="f-footer-links">
                    <a href="https://www.facebook.com/sharewithfilebliz" target="_blank" rel="noreferrer" title="Facebook">
                        <i className="fa-brands fa-facebook" style={{ fontSize: 24 }}></i>
                    </a>
                    <a href="https://www.instagram.com/sharewithfilebliz" target="_blank" rel="noreferrer" title="Instragram">
                        <i className="fa-brands fa-instagram" style={{ fontSize: 24 }}></i>
                    </a>
                    <a href="https://www.tiktok.com/@filebliz" target="_blank" rel="noreferrer" title="TikTok">
                        <i className="fa-brands fa-tiktok" style={{ fontSize: 24 }}></i>
                    </a>
                </div>
            </div>

            <div className="f-container">
                <h3>Navigation</h3>
                <div>
                    <span>
                        <Link to="/" onClick={handleClickA}>Home</Link>
                    </span>
                    <span>
                        <Link to="/premium" onClick={handleClickA} >Premium</Link>
                    </span>
                    <span>
                        <Link to="/about" onClick={handleClickA} >About</Link>
                    </span>
                    
                    <div></div>

                    <span>
                        <Link to="/account" onClick={handleClickA} >Account Dashboard</Link>
                    </span>
                </div>
            </div>

            <div className="f-container">
                <h3>Learn More</h3>
                <div>
                    <span>
                        <Link to="/premium" onClick={handleClickA} >Pricing</Link>
                    </span>
                    <span>
                        <Link to="/documentation"  onClick={handleClickA}>How to Send Files</Link>
                    </span>
                </div>
            </div>

            <div className="f-container">
                <h3>Support</h3>
                <div>
                    <Link to="/privacy" onClick={handleClickA} >Privacy Policy</Link>
                    <Link to="/terms" onClick={handleClickA} >Terms of Use</Link>
                    <Link to="/documentation" onClick={handleClickA} >Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;