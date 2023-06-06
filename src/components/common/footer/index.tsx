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
                    <span><i className="fas fa-phone"></i> Mindanao, Philippines</span>
                    <span><i className="fas fa-phone"></i> +63921-738-0430</span>
                    <span><i className="fas fa-email"></i> expomawd@gmail.com</span>
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
                        <Link className={""} to="/" onClick={handleClickA}>Home</Link>
                    </span>
                    <span>
                        <Link className={""} to="/premium" onClick={handleClickA} >Premium</Link>
                    </span>
                    <span>
                        <Link className={""} to="/about" onClick={handleClickA} >About</Link>
                    </span>
                    
                    <div></div>

                    <span>
                        <Link className={""} to="/account" onClick={handleClickA} >Account Dashboard</Link>
                    </span>
                </div>
            </div>

            <div className="f-container">
                <h3>Learn More</h3>
                <div>
                    <span>
                        <Link className={""} to="/premium" onClick={handleClickA} >Pricing</Link>
                    </span>
                    <span>
                        <Link className={""} to="/documentation"  onClick={handleClickA}>How to Send Files</Link>
                    </span>
                </div>
            </div>

            <div className="f-container">
                <h3>Support</h3>
                <div>
                    <Link className={""} to="/privacy" onClick={handleClickA} >Privacy Policy</Link>
                    <Link className={""} to="/terms" onClick={handleClickA} >Terms of Use</Link>
                    <Link className={""} to="/documentation" onClick={handleClickA} >Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;