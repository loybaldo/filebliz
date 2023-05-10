import "./button.scss"


interface ButtonInterface {
    classItem: string               // primary | p-accent | safe | info | warn | danger | ctrl | ctrl-b
    children?: React.ReactNode
    disabled?: boolean
    tabIndex?: number
    style?: string
    onclick?: () => any
    onKeyDown?: (event: any) => any
}


export default function Button(props: ButtonInterface) {
    return (
        <button disabled={props.disabled}
            tabIndex={props.tabIndex}
            className={"f-btn " + props.classItem}
            // style={style} <- ? wha
            onClick={props.onclick}
            onKeyDown={props.onKeyDown}

        // NOTE Use useNavigate from `react-router-dom` if you want to use the button as a navigator.
        >
            {props.children}
        </button>
    );
}