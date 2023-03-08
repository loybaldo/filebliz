import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import "./title.scss";

// havent tested line 12
// Gamit ka lang ng Button component from Bootstrap.

function Header() {
    return (
        <Container>
            <h1>404 Not Found</h1>
            <p>The page you were looking for does not exist.</p>
            <Button href="/">Go Back to Home</Button>
        </Container>
    );
}

export default Header;