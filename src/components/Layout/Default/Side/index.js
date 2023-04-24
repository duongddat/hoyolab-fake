import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faImage, faPenToSquare, faVideo } from "@fortawesome/free-solid-svg-icons";

import SliderAuto from "../../../SliderAuto";
import ScrollToTop from "../../../ScrollToTop";
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
            <div className={cx("side-section")}>
                <h3 className={cx("container-title")}>Official Information</h3>
                <div className={cx("note-com")}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faBook} className={cx("icon-rule")} />
                        <p className={cx("note-title")}>HoYoTaB Community Rules</p>
                    </Link>
                </div>
            </div>
            <div className={cx("side-section")}>
                <h3 className={cx("container-title")}>Hot topic</h3>
                <div className={cx("topic-com")}>
                    <div className={cx("topic-card")}>
                        <Link to="/">
                            <p className={cx("topic-title")}>#AI art</p>
                            <p className={cx("topic-stats")}>10k posts / 1,500 member</p>
                        </Link>
                    </div>
                    <div className={cx("topic-card")}>
                        <Link to="/">
                            <p className={cx("topic-title")}>#OST</p>
                            <p className={cx("topic-stats")}>20k posts / 0 member</p>
                        </Link>
                    </div>
                    <div className={cx("topic-card")}>
                        <Link to="/">
                            <p className={cx("topic-title")}>#Ganyu</p>
                            <p className={cx("topic-stats")}>6,739k posts / 1,130 member</p>
                        </Link>
                    </div>
                    <div className={cx("topic-card")}>
                        <Link to="/">
                            <p className={cx("topic-title")}>#Shenhe</p>
                            <p className={cx("topic-stats")}>9,999k posts / 1,000 member</p>
                        </Link>
                    </div>
                    <div className={cx("topic-card")}>
                        <Link to="/">
                            <p className={cx("topic-title")}>#Fu hua</p>
                            <p className={cx("topic-stats")}>99k posts / 9,900 member</p>
                        </Link>
                    </div>
                </div>
                <div className={cx("side-more")}>View more</div>
            </div>
            <SliderAuto className={cx("side-slider-auto")}/>
            <div className={cx("side-section")}>
                <div className={cx("side-qrcode")}>
                    <div className={cx("side-qrcode_code")}></div>
                    <div className={cx("side-qrcode_shop")}>
                        <Link to="https://apps.apple.com/app/id1559483982" target="_blank" className={cx("qrcode_shop-ios")} />
                        <Link to="https://play.google.com/store/apps/details?id=com.mihoyo.hoyolab&referrer=adjust_reftag%3Dccl0rsaDgyvXM%26utm_source%3DWebsites-PC%26utm_campaign%3DPC-Android-Button&pli=1" target="_blank" className={cx("qrcode_shop-androi")} />
                    </div>
                </div>
            </div>
            <div className={cx("side-footer")}>
                <div className={cx("footer-item")}>
                    <h3 className={cx("footer-item_title")}>About us</h3>
                    <div className={cx("footer-item_block")}>
                        <div className={cx("item-block_text")}>
                            <span>
                                HoYoLAB hoyolab@hoyoverse.com
                                Genshin Impact genshin_cs@hoyoverse.com
                                Tears of Themis totcs_glb@hoyoverse.com
                                Honkai: Star Rail hsrcs_en@hoyoverse.com
                                Content Creators contentcreator@hoyoverse.com"
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cx("footer-item")}>
                    <div className={cx("footer-item_block")}>
                        <div className={cx("item-block_text")}>
                            <span>
                                Forums Privacy Policy
                                Forums Terms of Service
                                HoYoverse Account Privacy Policy
                                HoYoverse Account Terms of Service
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cx("footer-item")}>
                    <p>Copyright © X.D.D. All Rights Reserved.z</p>
                </div>
            </div>
            <ScrollToTop/>
        </div>
    );
}

export default Side;