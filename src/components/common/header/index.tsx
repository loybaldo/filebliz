import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./header.scss";


function Header() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img alt="Fileblizz Logo" src="" width="30" height="30" className="d-inline-block align-top"/>
                    {' '}
                    Fileblizz
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                    </Nav>
                    <Button href="/signin" variant="outline-primary" className="me-3">Log in</Button>
                    <Button href="/signup">Sign up</Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default Header;