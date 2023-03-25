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

    const formatFileSize = (size: number) => {
        const kilobytes = size / 1024;
        if (kilobytes < 1024) {
            return `${kilobytes.toFixed(2)} Kb`;
        }
        const megabytes = kilobytes / 1024;
        if (megabytes < 1024) {
            return `${megabytes.toFixed(2)} Mb`;
        }
        const gigabytes = megabytes / 1024;
        return `${gigabytes.toFixed(2)} Gb`;
    }

    return(
        <div className="f-list-view">
            <div>
                <div><Icon icon={handleIconType()}/></div>
                <p> {fileName} </p>
            </div>
            <span className="f-size">{formatFileSize(size)}</span>
            <div>
                <button><Icon icon={Icons.copy_outline_bold} title="Copy File"/></button>
                <button><Icon icon={Icons.trash_outline_bold} title="Delete File"/></button>
            </div>
        </div>
    );
}

export default ListView;