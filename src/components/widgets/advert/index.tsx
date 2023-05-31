import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePlaceholder from "../../../assets/image-placeholder.svg";
import AdvertisementImage from "../../../assets/advertisement.svg";
import Button from "../../common/button";
import "./advert.scss";


function Advert() {

    const [showAdvert, setShowAdvert] = useState(false);
    const advertRef = useRef<HTMLDivElement>(null);
    const history = useNavigate();

    useEffect(() => {
        const advertSection = advertRef.current;
        const handleScroll = () => {
            if (advertSection && window.scrollY >= advertSection.offsetTop - window.innerHeight / 1.5) {
                setShowAdvert(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
        history('/premium');
      };


    return (
        <div ref={advertRef} className="f-advert">
            <img draggable="false" src={AdvertisementImage} alt="Advertisement" />
            <div className={`${showAdvert ? "show" : "hidden"}`}>
                <i className="fa-regular fa-crown" style={{ fontSize: 24, color: "#ec6e00" }}></i>

                <span>Upgrade to Premium</span>

                <p>Unlock the ability to upload larger files and enjoy advanced sharing features. Upgrade now for an enhanced file sharing experience.</p>
                <Button onclick={handleClick} classItem={"primary"}>Upgrade</Button>
            </div>
        </div>
    );
};

export default Advert;