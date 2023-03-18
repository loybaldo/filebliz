import './card.scss'


interface CardInterface {
    content: string
    className: string
    contentHeader: string
}

function Card({ content, className, contentHeader } : CardInterface) {
    return (
        (
        <div className={'card ' + className}>
            <h1>
                {contentHeader}
            </h1>
            <span>
                {content}
            </span>
        </div>
        )
    );
}

export default Card;