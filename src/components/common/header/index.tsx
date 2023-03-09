import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./header.scss";


function Header() {
    return (
        <Navbar bg="white border-bottom" expand="lg" sticky="top" style={{zIndex: 9}}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img alt="Fileblizz Logo" src="" width="30" height="30" className="d-inline-block align-top"/>
                    {' '}
                    Fileblizz
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderRadius: 15}}/>
                <Navbar.Collapse id="basic-navbar-nav" className="p-2">
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                    </Nav>
                    <Button href="/signin" variant="outline-primary" className="me-2" style={{borderRadius: 15}}>Log in</Button>
                    <Button href="/signup" style={{borderRadius: 15}}>Sign up</Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default Header;