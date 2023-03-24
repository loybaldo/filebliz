import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import Button from "../button";
import "./modal-qr.scss";


interface ModalQRInterface {
    url: string;
    show?: boolean;
}

function ModalQR({url, show}: ModalQRInterface) {
    const [visible, setVisible] = useState(show);

    const handleCopy = () => {
        setVisible(false);
        navigator.clipboard.writeText(url)
            .then(() => console.log(`Copied ${url} to clipboard`))
            .catch((err) => console.error('Could not copy text: ', err));
    }

    return (
        <div className="f-modal-qr" style={{display: (visible) ? "flex" : "none"}}>
            <div className="f-modal-qr-wrapper">
                <span className="f-header">Share File</span>
                <QRCodeCanvas style={{width: 200, height: 200}} value={url}/>
                <Button label="Copy link" onclick={handleCopy}/>
            </div>
        </div>
    );
}

export default ModalQR;