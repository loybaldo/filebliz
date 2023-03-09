import { Container } from "react-bootstrap";
import "./footer.scss";


function Footer() {
    return (
        <Container fluid className="bg-dark p-4 text-white">
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
                                <li><a href="#!" className="text-white">Home</a></li>
                                <li><a href="#!" className="text-white">Pricing</a></li>
                                <li><a href="#!" className="text-white">Account</a></li>
                                <li><a href="#!" className="text-white">About Us</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">More Options</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!" className="text-white">Feedback</a></li>
                                <li><a href="#!" className="text-white">Report a Problem</a></li>
                                <li><a href="#!" className="text-white">Privacy Policy</a></li>
                                <li><a href="#!" className="text-white">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>

                <div className="footer-copyright text-center py-3">© 2020 Copyright: Filebizz
                </div>

            </footer>
        </Container>
    );
}

export default Footer;