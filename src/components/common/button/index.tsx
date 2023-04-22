import "./button.scss"


interface ButtonInterface {
    classItem: string // primary | p-accent | safe | info | warn | danger | ctrl | ctrl-b
    children?: React.ReactNode
    disabled?: boolean
    tabIndex?: number
    style?: string
    onclick?: () => any
    onKeyDown?: (event: any) => any
}


export default function Button({ onclick, children, classItem, disabled, tabIndex, style, onKeyDown }: ButtonInterface) {
    return (
        <button disabled={disabled}
                tabIndex={tabIndex}
                className={"f-btn " + classItem}
                // style={style} <- ? wha
                onClick={onclick}
                onKeyDown={onKeyDown}
        >
            {children}
        </button>
    );
}