import { useState } from "react";
import Loader from "../loader";
import "./progress.scss";


interface ProgressInterface {
    percent: number;
    show: boolean;
}

function Progress({ percent, show }: ProgressInterface) {
    return(
        <>
            <div className="f-progress" style={{display: (!show) ? "none" : "flex"}}>
                <div className="f-progress-cont">
                    <Loader/>
                    <span>Uploading: {percent}%</span>
                </div>
            </div>
        </>
    );
}

export default Progress;