import { Link } from "react-router-dom";
import "./button.scss"


interface ButtonInterface {
    label: string;
    href?: string;
    color?: string;
    style?: any;
}

function Button({label, href, color, style}: ButtonInterface) {
    return (
        (href)?
        (<Link className="f-btn" to={href} style={{backgroundColor: color, ...style}}> {label} </Link>) :
        (<button className="f-btn" style={style}> {label} </button>)
    );
}

export default Button;