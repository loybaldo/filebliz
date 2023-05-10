import "./icon.scss";


interface IconInterface {
    icon: string;
    size?: number;
    color?: string;
    title?: string;
}

function Icon({ icon, size, color, title }: IconInterface) {
    return (
        <i className={"f-icon " + icon} style={{ fontSize: size, color: color }} title={title}></i>
    );
}

export default Icon;