import "./button.scss"


interface ButtonInterface {
    classItem: string
    children?: React.ReactNode
    onclick?: () => any
}


export default function Button({ onclick, children, classItem }: ButtonInterface) {
    return (
        <button className={"f-btn " + classItem} onClick={onclick}> 
            {children}
        </button>
    );
}