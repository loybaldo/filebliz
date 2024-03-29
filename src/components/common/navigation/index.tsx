import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/auth-provider";
import Button from "../button";
import Icon from "../icon";
import Icons from "../icon/Icon";
import ThemeSwitcher from "../../widgets/ThemeSwitcher";
import Modal from '../modal-wrapper'
// import Divider from "../divider";
import "./nav.scss";

   
export default function Navigation() {
    const { currentUser, logout } = useContext(AuthContext);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const pathName = useLocation().pathname;

    const [showModal, setShowModal] = useState(false);
    
     // Open Modal
     function openModal() {
         setShowModal(true);
         document.body.classList.add('disable-events');
         document.addEventListener('keydown', handleEscapeKeyPress);
    
         // you could also add other selectors e.g.; ...rAll('button, div, a, ...');
         const outsideElements = document.querySelectorAll('button');
         outsideElements.forEach((element) => {
             element.setAttribute('tabindex', '-1');
         });
     };
    
     function handleMouseEnter() {
         document.body.classList.remove('disable-events');
     };
    
     // Keybind Listner
     function handleEscapeKeyPress(event: KeyboardEvent) {
         if (event.key === 'Escape') {
             closeModal("");
         }
     };
    
     // Closes Modal
     function closeModal(balls: string) {
        if (balls === "notLogout") {
         setShowModal(false);
         document.removeEventListener('keydown', handleEscapeKeyPress);
    
         const outsideElements = document.querySelectorAll('button');
         outsideElements.forEach((element) => {
             element.removeAttribute('tabindex');
         });
        } else {
            setShowModal(false);
            logout()
         document.removeEventListener('keydown', handleEscapeKeyPress);
    
         const outsideElements = document.querySelectorAll('button');
         outsideElements.forEach((element) => {
             element.removeAttribute('tabindex');
         });
        }
     };


    /********/ const history = useNavigate();

    /********/ // TODO: [Optimization] Combine these functions into one
    /********/  const handleClickA = () => {
    /********/  window.scrollTo(0, 0);
                history('/signin');
    /********/  };

    /********/ const handleClickB = () => {
    /********/     history('/');
    /********/     window.scrollTo(0, 0);
    /********/ };

    const handleClick = () => {
        window.scrollTo(0, 0);
      };


   
    const handleToggle = () => {
        if (currentUser) {
            return (
                // <Button onclick={logout} classItem={"primary special-signin"} > Logout </Button>
                <Button onclick={openModal} classItem={"primary special-signin"} > Logout </Button>
                );
            } else {
                return (
                // <Button onclick={openModal} classItem={"primary special-signin"} > Logout </Button>
                <Button onclick={handleClickA} classItem={"primary special-signin"}> Sign in </Button>
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
            <Modal isOpen={showModal} onClose={() => closeModal("notLogout")} onMouseEnter={handleMouseEnter} modalTitle={'Confirm Log out'}>
                <span>Are you sure you want to log out?</span>
                <button onClick={() => closeModal("yesLogout")} className="f-btn primary special-signin" style={{margin: "30px 0 20px 0"}}> Logout </button>
            </Modal>


            <div className={(pathName === "/") ? "f-nav n-theme" : "f-nav"} style={{ top: (visible) ? 0 : -60 }}>
                <Button classItem="f-branding" onclick={handleClickB}>
                    <img draggable="false" src={require("../../../assets/logo-full192.png")} alt="Filebliz Logo" />
                    <span>FILEBLIZ</span>
                </Button>
                <nav className="f-links">
                    <Link className={(pathName === "/") ? "f-links-item f-links-active" : "f-links-item"} to="/" onClick={handleClick} >Home</Link>
                    <Link className={(pathName === "/premium") ? "f-links-item f-links-active" : "f-links-item" } to="/premium" onClick={handleClick}>Premium</Link>
                    <Link className={(pathName === "/account") ? "f-links-item f-links-active" : "f-links-item"} to="/account" onClick={handleClick}>Account</Link>
                    <Link className={(pathName === "/about") ? "f-links-item f-links-active" : "f-links-item"} to="/about" onClick={handleClick}>About</Link>
                </nav>
                <div className="f-nav-functions">
                    <ThemeSwitcher/>
                    <div></div>
                    {handleToggle()}
                </div>
            </div>
            
            {/* Mobile Navigation */}
            <nav className="f-btm-nav">
                <Link className={(pathName === "/") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/" onClick={handleClick}>
                    <Icon icon={(pathName === "/") ? Icons.home : Icons.home_outline_bold} />
                    <span>Home</span>
                </Link>
                <Link className={(pathName === "/premium") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/premium" onClick={handleClick}>
                    <Icon icon={(pathName === "/premium") ? Icons.store : Icons.store_outline_bold} />
                    <span>Premium</span>
                </Link>
                <Link className={(pathName === "/about") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/about" onClick={handleClick}>
                    <Icon icon={(pathName === "/about") ? Icons.comments : Icons.comments_outline_bold} />
                    <span>About</span>
                </Link>
                <Link className={(pathName === "/account") ? "f-btm-nav-item f-btm-nav-active" : "f-btm-nav-item"} to="/account" onClick={handleClick}>
                    <Icon icon={(pathName === "/account") ? Icons.user : Icons.user_outline_bold} />
                    <span>Account</span>
                </Link>
            </nav>
        </>
    );
}