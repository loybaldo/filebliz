import ListView from "../list-view";
import "./upload-list.scss";

function UploadList() {
    const items = Array.from({ length: 15}, (_, index) => ({
        id: `item_${index}`,
        fileName: "my_files_unknown.dart",
        fileExt: "dart",
        size: 12,
    }));

    return (
        <div className="f-upload-list">
            <span className="f-label">Uploaded ({items.length})</span>
            {items.map((item) => (
                <ListView
                    key={item.id}
                    id={item.id}
                    fileName={item.fileName}
                    fileExt={item.fileExt}
                    size={item.size}
                />
            ))}
        </div>
    );
}

export default UploadList;
