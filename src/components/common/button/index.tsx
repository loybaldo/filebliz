import { Link } from "react-router-dom";
import "./button.scss"


interface ButtonInterface {
    label: string;
    href?: string;
    color?: string;
    style?: any;
    onclick?: () => void;
}


function Button({ label, href, color, style, onclick }: ButtonInterface) {

    return (
        (href)?
        (<Link className="f-btn" to={href} style={{backgroundColor: color, ...style}}> {label} </Link>) :
        (<button className="f-btn" style={style} onClick={onclick}> {label} </button>)
    );
}

export default Button;