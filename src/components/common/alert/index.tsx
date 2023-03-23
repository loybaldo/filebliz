import Icon from "../icon";
import Icons from "../icon/Icon";
import "./alert.scss";


interface AlertInterface {
    title: string;
    message: string;
    type: "ok" | "info" | "warn" | "danger";
}

function Alert({title, message, type}: AlertInterface) {

    const handleAlertType = () => {
        switch(type) {
            case "ok":
                return "f-alert-ok";
            case "info":
                return "f-alert-info";
            case "warn":
                return "f-alert-warn";
            case "danger":
                return "f-alert-danger";
            default:
                return "ok";
        }
    }

    return (
        <>
            <div className={`f-alert ${handleAlertType()}`}>
                <Icon icon={Icons.info_circle}/>
                <div>
                    <p> {title} </p>
                    <p> {message} </p>
                </div>
            </div>
        </>
    );
}

export default Alert;