import { Link } from "react-router-dom";
import "./footer.scss";


function Footer() {
    return (
        <footer className="f-footer">
            <div className="f-container">
                <div>
                    <a href="https://facebook.com" target="_blank">
                        <i className="fa-brands fa-facebook" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <i className="fa-brands fa-square-instagram" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <i className="fa-brands fa-twitter" style={{fontSize: 24}}></i>
                    </a>
                </div>
                <div>
                    <span>Fileblizz, Copyright 2023</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;