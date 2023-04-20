import "./button.scss"


interface ButtonInterface {
    classItem: string
    children?: React.ReactNode
    // TODO
    // style?: string
    onclick?: () => any
}


export default function Button({ onclick, children, classItem }: ButtonInterface) {
    return (
        <button className={"f-btn " + classItem} onClick={onclick}>
            {children}
        </button>
    );
}