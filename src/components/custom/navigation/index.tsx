import { Link } from "react-router-dom";
import Button from "../../common/button";
import Icon from "../icon";
import Icons from "../icon/Icon";
import "./nav.scss";


function Navigation() {
    return (
        <>
            <div className="f-nav">
                <div className="f-branding">
                    <img src={require("../../../assets/logo-full192.png")} alt="Fileblizz Logo" />
                    <span>FILEBLIZ</span>
                </div>
                <nav className="f-links">
                    <Link className="f-links-item f-links-active" to="/">Home</Link>
                    <Link className="f-links-item" to="/premium">Premium</Link>
                    <Link className="f-links-item" to="/account">Account</Link>
                    <Link className="f-links-item" to="/about">About</Link>
                </nav>
                <Button href="/signin" label="Sign in"/>
            </div>

            <nav className="f-btm-nav">
                <Link className="f-btm-nav-item f-btm-nav-active" to="/"><Icon icon={Icons.home}/></Link>
                <Link className="f-btm-nav-item" to="/pricing"><Icon icon={Icons.store_outline_bold}/></Link>
                <Link className="f-btm-nav-item" to="/account"><Icon icon={Icons.user_outline_bold}/></Link>
                <Link className="f-btm-nav-item" to="/about"><Icon icon={Icons.question_circle_outline_bold}/></Link>
            </nav>
        </>
    );
}

export default Navigation;