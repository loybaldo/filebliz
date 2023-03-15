import Button from "../../common/button";
import "./advert.scss";


function Advert() {
    return (
        <div className="f-advert">
            <img src="" alt="Advertisement" />
            <div>
                <i className="fa-regular fa-crown" style={{fontSize: 24}}></i>
                <span>Upgrade to Premium</span>
                <p>Unlock the ability to upload larger files and enjoy advanced sharing features. Upgrade now for an enhanced file sharing experience.</p>
                <Button label="Upgrade"/>
            </div>
        </div>
    );
}

export default Advert;