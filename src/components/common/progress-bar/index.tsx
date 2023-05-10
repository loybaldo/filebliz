import "./progress-bar.scss";


interface ProgressBarInterface {
    progress: number;
}

function ProgressBar({ progress }: ProgressBarInterface) {
    return (
        <div className="f-progress-bar">
            <div className="f-progress" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;