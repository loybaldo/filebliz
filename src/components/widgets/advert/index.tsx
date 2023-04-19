import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "../../../assets/image-placeholder.svg";
import Button from "../../common/button";
import "./advert.scss";


function Advert() {

    const [showAdvert, setShowAdvert] = useState(false);
    const advertRef = useRef<HTMLDivElement>(null);

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


    return (
        <div ref={advertRef} className="f-advert">
            <img draggable="false" src={ImagePlaceholder} alt="Advertisement" />
            <div className={`${showAdvert ? "show" : "hidden"}`}>
                <i className="fa-regular fa-crown" style={{ fontSize: 24, color: "#ec6e00" }}></i>

                <span>Upgrade to Premium</span>
                
                <p>Unlock the ability to upload larger files and enjoy advanced sharing features. Upgrade now for an enhanced file sharing experience.</p>
                <Button href="/premium" label="Upgrade" />
            </div>
        </div>
    );
};

export default Advert;