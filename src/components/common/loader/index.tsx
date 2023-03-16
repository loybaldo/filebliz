import "./loader.scss";


interface LoaderInterface {
    type?: "circle" | "wave"
}


function Loader({type}: LoaderInterface) {
    return (
        (type === "circle") ?
        (<div className="f-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>) :

        (<div className="f-loader2">
            <div></div>
            <div></div>
            <div></div>
        </div>)
    );
}

export default Loader;