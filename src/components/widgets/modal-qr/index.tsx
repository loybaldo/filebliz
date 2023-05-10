import { QRCodeCanvas } from "qrcode.react";
import Button from "../../common/button";
import "./modal-qr.scss";


interface ModalQRInterface {
    url: string;
    onclick: () => void;
}

export default function ModalQR(props: ModalQRInterface) {
    return (
        <div className="f-modal-qr">
            <QRCodeCanvas style={{ width: 200, height: 200 }} value={props.url} />
            <Button onclick={props.onclick} classItem={"primary"}>Copy Link</Button>
        </div>
    );
}