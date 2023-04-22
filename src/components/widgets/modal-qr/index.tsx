import { QRCodeCanvas } from "qrcode.react";
import Button from "../../common/button";
import "./modal-qr.scss";


interface ModalQRInterface {
    url: string;
    onclick: () => void;
}

export default function ModalQR({ url, onclick }: ModalQRInterface) {
    return (
        <div className="f-modal-qr">
            <QRCodeCanvas style={{ width: 200, height: 200 }} value={url} />
            <Button onclick={onclick} classItem={"primary"}>Copy Link</Button>
        </div>
    );
}