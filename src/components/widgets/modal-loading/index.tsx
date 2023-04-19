import "./modal-loading.scss";
import Loader from "../../common/loader";


interface ModalLoadingInterface {
    label: string;
    show?: boolean;
}

// FIXME make resuable
function ModalLoading({label, show}: ModalLoadingInterface) {
    return (
        <div className="f-modal-loading" style={{display: (show) ? "flex" : "none"}}>
            <div className="f-modal-loading-wrapper">
                <Loader/>
                <p> {label} </p>
            </div>
        </div>
    );
}

export default ModalLoading;