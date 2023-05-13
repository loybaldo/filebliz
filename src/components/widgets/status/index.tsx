import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button";
import 'react-circular-progressbar/dist/styles.css';
import "./status.scss";


function Status() {

    const color = 63

    const history = useNavigate();
    let handleClick = () => {
        history('/premium');
    };

    return (
        <>
            <div className="f-status">
                <div className="f-card">
                    <div>
                        <span>Storage</span>
                        <CircularProgressbar
                            value={color}
                            text={`${color}%`}
                            styles={
                                {
                                    root: {},
                                    path: {
                                        strokeLinecap: 'round',
                                        // transition: 'stroke-dashoffset 0.5s ease 0s'
                                    },
                                    trail: {
                                        strokeLinecap: 'butt',
                                    },
                                    text: {
                                        fontSize: '16px',
                                    },
                                }
                            } />
                    </div>
                    <div>
                        <span>Used: 630MB</span>
                        <span>Free: 370MB</span>
                    </div>
                </div>

                <div className="f-card">
                    <i className="fa-regular fa-crown" style={{ fontSize: 24 }}></i>
                    <p>Running out of storage?</p>
                    <p>Click the button below to check our premium plan.</p>
                    <Button onclick={handleClick} classItem={"primary"} > Go Premium </Button>
                </div>
            </div>
        </>
    );
}

export default Status;