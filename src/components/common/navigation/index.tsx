import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../auth/auth-provider";
import Button from "../button";
import Icon from "../icon";
import Icons from "../icon/Icon";
import "./nav.scss";


function Navigation() {
    const { currentUser, logout } = useContext(AuthContext);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    const handleToggle = () => {
        if (currentUser) {
            return (<Button onclick={logout} label="Logout" style={{ animation: "slidedown5 0.5s ease-in-out" }}/>);
        } else {
            return (<Button href="/signin" label="Sign in" style={{ animation: "slidedown5 0.5s ease-in-out" }}/>);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <>
            <div className="f-nav" style={{top: (visible) ? 0 : -60 }}>
                <div className="f-branding">
                    <img src={require("../../../assets/logo-full192.png")} alt="Fileblizz Logo" />
                    <span>FILEBLIZ</span>
                </div>
                <nav className="f-links">
                    <Link className={(location.pathname === "/") ? "f-links-item f-links-active" : "f-links-item"} to="/">Home</Link>
                    <Link className={(location.pathname === "/premium") ? "f-links-item f-links-active" : "f-links-item"} to="/premium">Premium</Link>
                    <Link className={(location.pathname === "/account") ? "f-links-item f-links-active" : "f-links-item"} to="/account">Account</Link>
                    <Link className={(location.pathname === "/about") ? "f-links-item f-links-active" : "f-links-item"} to="/about">About</Link>
                </nav>
                {handleToggle()}
                
            </div>

            <nav className="f-btm-nav">
                <Link className={(location.pathname === "/") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/">
                    <Icon icon={(location.pathname === "/") ? Icons.home : Icons.home_outline_bold}/>
                </Link>
                <Link className={(location.pathname === "/premium") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/premium">
                    <Icon icon={(location.pathname === "/premium") ? Icons.store : Icons.store_outline_bold}/>
                </Link>
                <Link className={(location.pathname === "/account") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"}  to="/account">
                    <Icon icon={(location.pathname === "/account") ? Icons.user : Icons.user_outline_bold}/>
                </Link>
                <Link className={(location.pathname === "/about") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"}  to="/about">
                    <Icon icon={(location.pathname === "/about") ? Icons.question_circle : Icons.question_circle_outline_bold}/>
                </Link>
            </nav>
        </>
    );
}

export default Navigation;