import { Link, useNavigate } from "react-router-dom";
import "./footer.scss";
import Button from "../button";
import Divider from "../divider";


function Footer() {
    // const [showFooter, setShowFooter] = useState(false);
    // const footerRef = useRef<HTMLDivElement>(null);
    const appFirstPublished = parseInt(process.env.REACT_APP_FIRST_PUBLISHED!);
    const history = useNavigate();

    // useEffect(() => {
    //     const footerSection = footerRef.current;
    //     const handleScroll = () => {
    //         if (footerSection && window.scrollY >= footerSection.offsetTop - window.innerHeight / 1.4) {
    //             setShowFooter(true);
    //         }
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    let handleClick = () => {
        history('/');
    };

    return (
        <footer className="f-footer" id="footer">
            {/* <div
                // ref={footerRef}
                className="f-container"
            >
                <div className={
                    // `${showFooter ? "show" : "hidden"}`
                    ""
                }>

                    <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                        <i className="fa-brands fa-facebook" style={{ fontSize: 24 }}></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instragram">
                        <i className="fa-brands fa-instagram" style={{ fontSize: 24 }}></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
                        <i className="fa-brands fa-twitter" style={{ fontSize: 24 }}></i>
                    </a>
                </div>
                <div className={
                    // `${showFooter ? "show" : "hidden"}`
                    ""
                }>
                    <span style={{ display: "inline-block", textAlign: "center" }}>Filebliz, Copyright&copy; {appFirstPublished} {((new Date().getFullYear()) > appFirstPublished) ? ` - ${new Date().getFullYear()}` : null}. By using Filebliz, you agree to our&nbsp;
                        <Link to="/privacy">privacy policy</Link> and&nbsp;
                        <Link to="/terms" >terms &amp; conditions</Link>.
                    </span>
                </div>
            </div> */}

            <div className="f-container main">
                <Button classItem="f-branding" onclick={handleClick}>
                    <img draggable="false" src={require("../../../assets/logo-full192.png")} alt="Fileblizz Logo" />
                    <span>FILEBLIZ</span>
                </Button>
                <span>
                    Filebliz, &copy; Copyright {appFirstPublished} {((new Date().getFullYear()) > appFirstPublished) ? ` - ${new Date().getFullYear()}` : null}- All Rights Reserved.
                    {/* By using Filebliz, you agree to our&nbsp;
                    <Link to="/privacy">privacy policy</Link> and&nbsp;
                    <Link to="/terms" >terms &amp; conditions</Link>. */}
                </span>
                <div>
                    <Divider />
                    <span>Mindanao, Philippines</span>
                    <span>+000 000 0000</span>
                    <span>expomawd@gmail.com</span>
                </div>

                <div className="f-footer-links">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                        <i className="fa-brands fa-facebook" style={{ fontSize: 24 }}></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instragram">
                        <i className="fa-brands fa-instagram" style={{ fontSize: 24 }}></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
                        <i className="fa-brands fa-twitter" style={{ fontSize: 24 }}></i>
                    </a>
                </div>
            </div>

            <div className="f-container">
                <h3>Navigation</h3>
                <div>
                    <span>
                        <Link className={""} to="/">Home</Link>
                    </span>
                    <span>
                        <Link className={""} to="/premium">Premium</Link>
                    </span>
                    <span>
                        <Link className={""} to="/about">About</Link>
                    </span>
                    
                    <div></div>

                    <span>
                        <Link className={""} to="/account">Account Dashboard</Link>
                    </span>
                </div>
            </div>

            <div className="f-container">
                <h3>Learn More</h3>
                <div>
                    <span>
                        <Link className={""} to="/premium">Pricing</Link>
                    </span>
                    <span>
                        <Link className={""} to="/documentation">How to Send Files</Link>
                    </span>
                </div>
            </div>

            <div className="f-container">
                <h3>Support</h3>
                <div>
                    <Link className={""} to="/documentation">Privacy Policy</Link>
                    <Link className={""} to="/documentation">Terms of Use</Link>
                    <Link className={""} to="/documentation">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;