import "./icon.scss";


interface IconInterface {
    icon: string;
}

function Icon({ icon }: IconInterface) {
    return (
        <i className={"f-icon " + icon}></i>
    );
}

export default Icon;