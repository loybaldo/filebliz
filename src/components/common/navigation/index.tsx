import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/auth-provider";
import Button from "../button";
import Icon from "../icon";
import Icons from "../icon/Icon";
import "./nav.scss";
import ThemeSwitcher from "../../widgets/ThemeSwitcher";


function Navigation() {
    const { currentUser, logout } = useContext(AuthContext);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const pathName = useLocation().pathname;

    const history = useNavigate();

    let handleClick = () => {
        history('/signin');
    };

    const handleToggle = () => {
        if (currentUser) {
            return (
                <Button onclick={logout} classItem={"primary"} > Logout </Button>
            );
        } else {
            return (
                <Button onclick={handleClick} classItem={"primary"}> Sign in </Button>
            );
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
            <div className={(pathName === "/") ? "f-nav-theme" : "f-nav"} style={{ top: (visible) ? 0 : -60 }}>
                <div className="f-branding">
                    <img draggable="false" src={require("../../../assets/logo-full192.png")} alt="Fileblizz Logo" />
                    <span>FILEBLIZ</span>
                </div>
                <nav className="f-links">
                    <Link className={(pathName === "/") ? "f-links-item f-links-active" : "f-links-item"} to="/">Home</Link>
                    <Link className={(pathName === "/premium") ? "f-links-item f-links-active" : "f-links-item"} to="/premium">Premium</Link>
                    <Link className={(pathName === "/account") ? "f-links-item f-links-active" : "f-links-item"} to="/account">Account</Link>
                    <Link className={(pathName === "/about") ? "f-links-item f-links-active" : "f-links-item"} to="/about">About</Link>
                </nav>
                <ThemeSwitcher/>
                {handleToggle()}

            </div>

            <nav className="f-btm-nav">
                <Link className={(pathName === "/") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/">
                    <Icon icon={(pathName === "/") ? Icons.home : Icons.home_outline_bold} />
                    <span>Home</span>
                </Link>
                <Link className={(pathName === "/premium") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/premium">
                    <Icon icon={(pathName === "/premium") ? Icons.store : Icons.store_outline_bold} />
                    <span>Premium</span>
                </Link>
                <Link className={(pathName === "/about") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/about">
                    <Icon icon={(pathName === "/about") ? Icons.comments : Icons.comments_outline_bold} />
                    <span>About</span>
                </Link>
                <Link className={(pathName === "/account") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/account">
                    <Icon icon={(pathName === "/account") ? Icons.user : Icons.user_outline_bold} />
                    <span>Account</span>
                </Link>
            </nav>
        </>
    );
}

export default Navigation;