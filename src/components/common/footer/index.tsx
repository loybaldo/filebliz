import { Container } from "react-bootstrap";
import "./footer.scss";


function Footer() {
    return (
        <Container fluid className="bg-light p-4">
            <footer className="text-center">
                Fileblizz, Copyright&copy; 2023
            </footer>
        </Container>
    );
}

export default Footer;