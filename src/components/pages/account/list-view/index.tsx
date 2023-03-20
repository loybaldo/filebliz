import Icon from "../../../common/icon";
import Icons from "../../../common/icon/Icon";
import "./list-view.scss";


interface ListViewInterface {
    id: string;
    fileName: string;
    fileExt: string;
    size: number;
}

function ListView({fileName, size}: ListViewInterface) {
    return(
        <div className="f-list-view">
            <div>
                <div><Icon icon={Icons.file}/></div>
                <p> {fileName} </p>
            </div>
            <span className="f-size"> {size}Kb</span>
            <div>
                <button><Icon icon={Icons.copy_outline_bold}/></button>
                <button><Icon icon={Icons.trash_outline_bold}/></button>
            </div>
        </div>
    );
}

export default ListView;