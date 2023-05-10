import Icon from "../icon";
import Icons from "../icon/Icon";
import "./alert.scss";


interface AlertInterface {
    title: string;
    type: "ok" | "info" | "warn" | "danger";
    children?: React.ReactNode
}

function Alert(props: AlertInterface) {

    const handleAlertType = () => {
        switch (props.type) {
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
                <Icon icon={Icons.info_circle} />
                <div>
                    <p> {props.title} </p>
                    <p> {props.children} </p>
                </div>
            </div>
        </>
    );
}

export default Alert;