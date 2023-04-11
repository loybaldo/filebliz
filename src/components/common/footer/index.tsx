import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";


function Footer() {
    const [showFooter, setShowFooter] = useState(false);
    const footerRef = useRef<HTMLDivElement>(null);
    const appFirstPublished = parseInt(process.env.REACT_APP_FIRST_PUBLISHED!);
      
    useEffect(() => {
        const footerSection = footerRef.current;
        const handleScroll = () => {
            if (footerSection && window.scrollY >= footerSection.offsetTop - window.innerHeight / 1.4) {
                setShowFooter(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="f-footer">
            <div ref={footerRef} className="f-container">
                <div className={`${showFooter ? "show" : "hidden"}`}>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                        <i className="fa-brands fa-facebook" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instragram">
                        <i className="fa-brands fa-instagram" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"  title="Twitter">
                        <i className="fa-brands fa-twitter" style={{fontSize: 24}}></i>
                    </a>
                </div>
                <div className={`${showFooter ? "show" : "hidden"}`}>
                    <span style={{display: "inline-block", textAlign: "center"}}>Filebliz, Copyright&copy; {appFirstPublished} {((new Date().getFullYear()) > appFirstPublished) ? ` - ${new Date().getFullYear()}` : null}. By using Filebliz, you agree to our&nbsp;
                        <Link to="/privacy" style={{color: "white", fontWeight: "bold"}}>privacy policy</Link> and&nbsp;
                        <Link to="/terms"  style={{color: "white", fontWeight: "bold"}}>terms &amp; conditions</Link>.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;