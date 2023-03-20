import Button from "../../common/button";
import "./advert.scss";
import ImagePlaceholder from "../../../assets/image-placeholder.svg";


function Advert() {
    return (
        <div className="f-advert">
            <img src={ImagePlaceholder} alt="Advertisement" />
            <div>
                <i className="fa-regular fa-crown" style={{fontSize: 24, color: "var(--accent-color)"}}></i>
                <span>Upgrade to Premium</span>
                <p>Unlock the ability to upload larger files and enjoy advanced sharing features. Upgrade now for an enhanced file sharing experience.</p>
                <Button href="/premium" label="Upgrade"/>
            </div>
        </div>
    );
}

export default Advert;
