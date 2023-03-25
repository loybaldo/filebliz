import fileType from "../../../../utils/file-type";
import Icon from "../../../common/icon";
import Icons from "../../../common/icon/Icon";
import "./list-view.scss";


interface ListViewInterface {
    id: string;
    fileName: string;
    fileExt: string;
    size: number;
}

function ListView({fileName, size, fileExt}: ListViewInterface) {
    const handleIconType = () => {
        const { VIDEOS, AUDIOS, IMAGES, DOCS, PACKAGES } = fileType;
        switch(true) {
            case VIDEOS.includes(fileExt):
                return Icons.video;
            case AUDIOS.includes(fileExt):
                return Icons.headphones;
            case IMAGES.includes(fileExt):
                return Icons.image;
            case DOCS.includes(fileExt):
                return Icons.file;
            case PACKAGES.includes(fileExt):
                return Icons.package;
            default:
                return Icons.question_circle;
        }
    }

    return(
        <div className="f-list-view">
            <div>
                <div><Icon icon={handleIconType()}/></div>
                <p> {fileName} </p>
            </div>
            <span className="f-size"> {size}Kb</span>
            <div>
                <button><Icon icon={Icons.copy_outline_bold} title="Copy File"/></button>
                <button><Icon icon={Icons.trash_outline_bold} title="Delete File"/></button>
            </div>
        </div>
    );
}

export default ListView;