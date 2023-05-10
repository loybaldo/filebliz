import './card.scss'


interface CardInterface {
    content: string
    className: string
    contentHeader: string
}

function Card(props: CardInterface) {
    return (
        <div className={'card ' + props.className}>
            <h1> {props.contentHeader} </h1>
            <span> {props.content} </span>
        </div>
    );
}

export default Card;