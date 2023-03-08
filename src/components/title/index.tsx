import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./title.scss";

// havent tested line 12

function Header() {
    return (
        <Container>
            <h1>404 Not Found</h1>
            <p>The page you were looking for does not exist.</p>
            <Link to="/">Go Back to Home</Link> 
        </Container>
    );
}

export default Header;