import fileType from "../../../utils/file-type";
import Icon from "../../common/icon";
import Icons from "../../common/icon/Icon";
import ThumbnailVideo from "../../../assets/thumbnail-video.svg";
import ThumbnailImage from "../../../assets/thumbnail-image.svg";
import ThumbnailCode from "../../../assets/thumbnail-code.svg";
import ThumnailMusic from "../../../assets//thumbnail-music.svg";
import ThumbnailZip from "../../../assets/thumbnail-zip.svg";
import ThumbnailUnknown from "../../../assets/thumbnail-unknown.svg";
import Button from "../../common/button";
import "./list-view.scss";
import { Link } from "react-router-dom";


interface ListViewInterface {
    id: string;
    fileName: string;
    fileExt: string;
    size: number;
    url: string;
    date: string;
}

function ListView(props: ListViewInterface) {

    const handleIconType = () => {
        const { AUDIOS, IMAGES, PACKAGES, CODES, VIDEOS } = fileType;
        switch (true) {
            case VIDEOS.includes(props.fileExt):
                return ThumbnailVideo;
            case AUDIOS.includes(props.fileExt):
                return ThumnailMusic;
            case IMAGES.includes(props.fileExt):
                return ThumbnailImage;
            case PACKAGES.includes(props.fileExt):
                return ThumbnailZip;
            case CODES.includes(props.fileExt):
                return ThumbnailCode
            default:
                return ThumbnailUnknown;
        }
    }

    // ==================================================
	//     Calculate the file size to unit KB, MB, and GB
	// ==================================================
    const formatFileSize = (size: number) => {
        const CONVERSION_UNIT = 1024;
        const kilobytes = size / CONVERSION_UNIT;
        const megabytes = kilobytes / CONVERSION_UNIT;
        const gigabytes = megabytes / CONVERSION_UNIT;

        if (kilobytes < CONVERSION_UNIT) { return `${kilobytes % 1 === 0 ? kilobytes : kilobytes.toFixed(kilobytes < 10 ? 1 : 0)} KB` }
        if (megabytes < CONVERSION_UNIT) { return `${megabytes % 1 === 0 ? megabytes : megabytes.toFixed(megabytes < 10 ? 1 : 0)} MB` }
        return `${gigabytes.toFixed(1)} GB`;
    }

    const handleCopyLink = () => {
        const host = window.location.hostname === "localhost" ? `${window.location.hostname}:${window.location.port}` : window.location.hostname;
        navigator.clipboard.writeText(`${host}/download?id=${props.id}`).then(() => {
            alert("Link copied to clipboard.");
        }).catch((err) => console.error('Could not copy text: ', err));
    }

    return (
        <div className="f-list-view">
            <Link className="f-list-clickable" to={`/download?id=${props.id}`}>
                <div className="f-list-trail">
                    <div><img draggable="false" src={handleIconType()} alt={props.fileExt} /></div>
                    <p> {props.fileName} </p>
                </div>
                <div className="f-list-info">
                    <span>{formatFileSize(props.size)}</span>
                    <span>{new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(props.date))}</span>
                </div>
            </Link>

            <div className="f-list-action">
                <button className="f-btn" onClick={handleCopyLink}><Icon icon={Icons.copy_outline_bold} title="Copy File" /></button>
                <button className={"f-btn"} onClick={() => alert("Under development!")}><Icon icon={Icons.trash_outline_bold} title="Delete File" /></button>
            </div>
        </div>
    );
}

export default ListView;