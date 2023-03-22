import { Link } from "react-router-dom";
import "./button.scss"


interface ButtonInterface {
    label: string;
    href?: string;
    color?: string;
    style?: any;
    scrollToTop: boolean
    onclick?: () => void; // idk what you did here, Im still learning react xd
}


function Button({ label, href, color, style, scrollToTop }: ButtonInterface) {


    // purpose: scroll page back to top when a button is clicked
    // [PROBLEM] Page landing on an incorrect scroll position when navigating to pages
    // FIXME pass this event after the page loaded

    const HandleClick = () => {
        console.log('Scroll To Top? : ' + scrollToTop);

        if (scrollToTop) {
            window.scrollTo(0, 0);
        }

    };

    return (
        (href)?
        (<Link className="f-btn" to={href} style={{backgroundColor: color, ...style}}> {label} </Link>) :
        (<button className="f-btn" style={style} onClick={HandleClick}> {label} </button>)
    );
}

export default Button;