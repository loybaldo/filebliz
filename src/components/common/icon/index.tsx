import "./icon.scss";


interface IconInterface {
    icon: string;
    size?: number;
    color?: string;
}

function Icon({ icon, size, color }: IconInterface) {
    return (
        <i className={"f-icon " + icon} style={{fontSize: size, color: color}}></i>
    );
}

export default Icon;