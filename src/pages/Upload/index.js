import classNames from "classnames/bind";

import styles from "./Upload.scss";

const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx("update-wrapper")}>
            <div className={cx("update-container")}>
                <div className={cx("update-container-bg")}>
                    Update page
                </div>
            </div>
        </div>
    );
}

export default Upload;