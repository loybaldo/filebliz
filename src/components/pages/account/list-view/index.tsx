import fileType from "../../../../utils/file-type";
import Icon from "../../../common/icon";
import Icons from "../../../common/icon/Icon";
import "./list-view.scss";


interface ListViewInterface {
    id: string;
    fileName: string;
    fileExt: string;
    size: number;
    url: string;
    date: string;
}

function ListView({fileName, size, fileExt, url, date}: ListViewInterface) {
    const handleIconType = () => {
        const { VIDEOS, AUDIOS, IMAGES, DOCS, PACKAGES, CODES } = fileType;
        switch(true) {
            case VIDEOS.includes(fileExt):
                return "fa-solid fa-film-simple";
            case AUDIOS.includes(fileExt):
                return "fa-solid fa-music-note";
            case IMAGES.includes(fileExt):
                return "fa-solid fa-image";
            case DOCS.includes(fileExt):
                return "fa-solid fa-file-word";
            case PACKAGES.includes(fileExt):
                return "fa-solid fa-file-zipper";
            case CODES.includes(fileExt):
                return "fa-solid fa-code";
            default:
                return "fa-solid fa-ghost";
        }
    }

    const formatFileSize = (size: number) => {
        const CONVERSION_UNIT = 1024;
        const kilobytes = size / CONVERSION_UNIT;
        const megabytes = kilobytes / CONVERSION_UNIT;
        const gigabytes = megabytes / CONVERSION_UNIT;

        if (kilobytes < CONVERSION_UNIT) { return `${kilobytes % 1 === 0 ? kilobytes : kilobytes.toFixed(kilobytes < 10 ? 1 : 0)} KB` }
        if (megabytes < CONVERSION_UNIT) { return `${megabytes % 1 === 0 ? megabytes : megabytes.toFixed(megabytes < 10 ? 1 : 0)} MB` }
        return `${gigabytes.toFixed(1)} Gb`;
    }

    return(
        <div className="f-list-view">
            <a className="f-list-clickable" href={url} target="_blank" rel="noreferrer">
                <div className="f-list-trail">
                    <div><i className={handleIconType()}></i></div>
                    <p> {fileName} </p>
                </div>
                <div className="f-list-info">
                    <span>{formatFileSize(size)}</span>
                    <span>{new Intl.DateTimeFormat("en-US", {month: "short", day: "numeric", year: "numeric"}).format(new Date(date))}</span>
                </div>
            </a>

            <div className="f-list-action">
                <button><Icon icon={Icons.copy_outline_bold} title="Copy File"/></button>
                <button><Icon icon={Icons.trash_outline_bold} title="Delete File"/></button>
            </div>
        </div>
    );
}

export default ListView;