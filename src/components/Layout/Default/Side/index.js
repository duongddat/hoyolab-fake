import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPenToSquare, faVideo } from "@fortawesome/free-solid-svg-icons";

import { toolsbar } from "../../../../constants";
import styles from "./Side.scss";
import config from "../../../../config";

const cx = classNames.bind(styles);
function Side() {
    return (
        <div className={cx("side-container")}>
            <div className={cx("side-section")}>
                <h3 className={cx("container-title")}>Tools Box</h3>
                <ul className={cx("tools-list")}>
                    {toolsbar.map((tool, i) => (
                        <li key={i} className={cx("tool-item")}>
                            <Link to={tool.url} target="_blank">
                                <img src={tool.img} alt={tool.title} />
                                <h5 className={cx("tool-item_name")}>{tool.title}</h5>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx("side-section")}>
                <div className={cx("container-title")}>Post now~</div>
                <div className={cx("tools-list")}>
                    <Link to={config.routes.upload} className={cx("new-post_dialog tool-item")}>
                        <FontAwesomeIcon className={cx("post-icon-item m-none post-icon-pen")} icon={faPenToSquare} />
                        <h5 className={cx("post-name")}>Post</h5>
                    </Link>
                    <Link to={config.routes.upload} className={cx("new-post_dialog tool-item")}>
                        <FontAwesomeIcon className={cx("post-icon-item m-none post-icon-image")} icon={faImage} />
                        <h5 className={cx("post-name")}>Image</h5>
                    </Link>
                    <Link to={config.routes.upload} className={cx("new-post_dialog tool-item")}>
                        <FontAwesomeIcon className={cx("post-icon-item m-none post-icon-video")} icon={faVideo} />
                        <h5 className={cx("post-name")}>Video</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Side;