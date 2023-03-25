import { useEffect, useRef, useState } from "react";
import "./footer.scss";


function Footer() {
    const [showFooter, setShowFooter] = useState(false);
    const footerRef = useRef<HTMLDivElement>(null);
      
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
                        <i className="fa-brands fa-square-instagram" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"  title="Twitter">
                        <i className="fa-brands fa-twitter" style={{fontSize: 24}}></i>
                    </a>
                </div>
                <div className={`${showFooter ? "show" : "hidden"}`}>
                    <span>Filebliz, Copyright 2023</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;