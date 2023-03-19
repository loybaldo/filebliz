import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Button from "../../common/button";
import "./status.scss";


function Status() {
    return (
        <>
            <div className="f-status">
                <div className="f-card">
                    <div>
                        <span>Storage</span>
                        <CircularProgressbar value={63} text={`${63}%`} styles={buildStyles({pathColor: "var(--primary-color)", textColor: "black"})}/>
                    </div>
                    <div>
                        <span>Used: 630Mb</span>
                        <span>Free: 370Mb</span>
                    </div>
                </div>

                <div className="f-card">
                    <i className="fa-regular fa-crown" style={{fontSize: 24}}></i>
                    <p>Running out of storage?</p>
                    <p>Click the button below to check our premium plan.</p>
                    <Button href="/premium" label="Go Premium" style={{marginLeft: "auto"}}/>
                </div>
            </div>
        </>
    );
}

export default Status;