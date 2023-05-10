import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faImages } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./Upload.scss";
import {  useState } from "react";

const cx = classNames.bind(styles);
function Upload() {
    const [title, setTitle] = useState('');
    const [description, setDecription] = useState('');

    return (
        <div className={cx("update-wrapper")}>
            <div className={cx("update-container")}>
                <div className={cx("update-container-bg")}>
                    <div className={cx("update-new_content")}>
                        <div className={cx("update-new_header")}>
                            <h1>Post image</h1>
                        </div>
                        <div className={cx("update-new_editor")}>
                            <div className={cx("form-item-container")}>
                                <span className={cx("form-item-container_label")}>Title</span>
                                <div className={cx("form-item-container_input")}>
                                    <div className={cx("input_container--focus")}>
                                        <input onChange={e => setTitle(e.target.value)} type="text" maxLength={200} placeholder="Please enter title (require)" />
                                        <span className={cx("count-tip")}>{title.length}/200</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("form-item-container")}>
                                <span className={cx("form-item-container_label")}>Description</span>
                                <div className={cx("form-item-container_describe")}>
                                    <div className={cx("input_container")}>
                                        <textarea onChange={e => setDecription(e.target.value)} maxLength={1000} placeholder="Please enter text"></textarea>
                                        <span className={cx("input-maxtip")}>{description.length}/1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("form-item-container form-img-upload")}>
                                <span className={cx("form-item-container_label")}>Upload an image</span>
                                <div className={cx("form-item-container_tip")}>You can upload up to 100 images at the same time (JPG, PNG, JPEG, GIF, with a width and height of at least 420 pixels).</div>
                                <div className={cx("form-item-container_img")}>
                                    <div className={cx("form-img-upload_add")}>
                                        <FontAwesomeIcon icon={faImages} className={cx("icon-images_add")} />
                                        {/* <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" multiple/> */}
                                    </div>
                                </div>
                            </div>
                            <div className={cx("form-item-container")}>
                                <span className={cx("form-item-container_label")}>Select Interest Group</span>
                                <div className={cx("form-item-selector")}>
                                    <div className={cx("form-select-outline")}>
                                        <div className={cx("form-_elect-container")}>
                                            <span className={cx("form-select-label")}>
                                                <span className={cx("form-select_val")}>
                                                    <span>Select Interest Group</span>
                                                </span>
                                            </span>
                                            <FontAwesomeIcon className={cx("icon-select")} icon={faCircleChevronDown} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("form-item-container")}>
                                <span className={cx("form-item-container_label")}>Topic</span>
                                <div className={cx("form-item-container_input")}>
                                    <div className={cx("input_container--focus")}>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={cx("update-new_footer")}>
                        <div className={cx("normal__primary button-large btn")}>
                            <span>Publish</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;