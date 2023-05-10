import { QRCodeCanvas } from "qrcode.react";
import Button from "../button";
import "./modal-qr.scss";


interface ModalQRInterface {
    url: string;
    show?: boolean;
    onclick: () => void;
}

function ModalQR({url, show, onclick}: ModalQRInterface) {
    return (
        <div className="f-modal-qr" style={{display: (show) ? "flex" : "none"}}>
            <div className="f-modal-qr-wrapper">
                <span className="f-header">Share File</span>
                <QRCodeCanvas style={{width: 200, height: 200}} value={url}/>
                <Button label="Copy link" onclick={onclick}/>
            </div>
        </div>
    );
}

export default ModalQR;