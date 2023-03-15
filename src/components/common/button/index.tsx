import { Link } from "react-router-dom";
import "./button.scss"


interface ButtonInterface {
    label: string;
    href?: string;
    color?: string;
}

function Button({label, href, color}: ButtonInterface) {
    return (
        (href)?
        (<Link className="f-btn" to={href} style={{backgroundColor: color}}> {label} </Link>) :
        (<button className="f-btn"> {label} </button>)
    );
}

export default Button;