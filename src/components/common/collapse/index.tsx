import { useState } from "react";
import Icon from "../icon";
import Icons from "../icon/Icon";
import "./collapse.scss";


interface CollapseInterface {
    title: string;
    desc: string;
}

function Collapse({title, desc}: CollapseInterface) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (visible) {
            setVisible(false);
        }else {
            setVisible(true);
        }
    }

    return (
        <div className="f-collapse">
            <div onClick={toggleVisibility}>
                <Icon icon={(visible) ? Icons.chevron_down : Icons.chevron_right}/>
                <p> {title} </p>
            </div>
            <p className="f-desc" style={{height: (visible) ? "fit-content" : 0}}> {desc} </p>
        </div>
    );
}

export default Collapse;