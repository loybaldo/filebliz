import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.scss";


function Footer() {
    return (
        <Container fluid className="bg-light p-4">
            <footer className="page-footer font-small blue pt-4">
                <Container className="text-center">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Fileblizz</h5>
                            <p>Fileblizz offers an intuitive file-sharing experience, enabling users to easily share files for group projects or essential document sharing.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Navigation</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/" style={{textDecoration: "none"}}>Home</Link></li>
                                <li><Link to="/pricing" style={{textDecoration: "none"}}>Pricing</Link></li>
                                <li><Link to="/account" style={{textDecoration: "none"}}>Account</Link></li>
                                <li><Link to="/about" style={{textDecoration: "none"}}>About Us</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">More Options</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/feedback" style={{textDecoration: "none"}}>Feedback</Link></li>
                                <li><Link to="/report" style={{textDecoration: "none"}}>Report a Problem</Link></li>
                                <li><Link to="/privacy" style={{textDecoration: "none"}}>Privacy Policy</Link></li>
                                <li><Link to="/terms" style={{textDecoration: "none"}}>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>

                <div className="footer-copyright text-center py-3">© 2023 Copyright: Filebizz
                </div>

            </footer>
        </Container>
    );
}

export default Footer;