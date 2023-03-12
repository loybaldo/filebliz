import "./button.scss"


interface ButtonInterface {
    label: string;
    href?: string;
}

function Button({label, href}: ButtonInterface) {
    return (
        <button className="f-btn"> {label} </button>
    );
}

export default Button;