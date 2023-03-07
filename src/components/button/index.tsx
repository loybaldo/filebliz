import "./button.css"


interface ButtonInterface {
    label: string;
}

function Button({label}: ButtonInterface) {
    return (
        <button className="f-btn"> {label} </button>
    );
}

export default Button;