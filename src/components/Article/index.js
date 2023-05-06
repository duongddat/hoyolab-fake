import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCircleXmark, faClone, faComment, faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./article.scss";
import config from "../../config";

const cx = classNames.bind(styles);
function Article({ idUser, idArticle, avatar, name, info, title, topic, description, image }) {
    const [copy, setCopy] = useState('icon-item');
    const [like, setLiked] = useState('icon-item');
    const [copied, setCopied] = useState(false);
    const [show, setShow] = useState('slider-show');
    const [current, setCurrent] = useState(0);
    const lenght = image.length;

    //Check title 
    const fixTitle = title.length > 71 ? title.slice(0, 71) + '...' : title; 

    const handleSliderShow = () => {
        setShow('slider-show active');
    }
    const handleSliderHide = () => {
        setShow('slider-show');
        setCurrent(0);
    }

    //Slider shows
    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1);
    }

    //Like article
    const handleLike = () => {
        like === 'icon-item' ? setLiked('icon-item active') : setLiked('icon-item');
    }

    //Copied URL
    const handleCopyToClip = () => {
        navigator.clipboard.writeText(window.location.href +  "article/" + idArticle);
        setCopied(true);
        setCopy('icon-item active');
    }

    //Scroll to Top of Article Details
    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={cx("body-container")}>
            <div className={cx("user-card")}>
                <Link to={config.routes.profile + `/${idUser}`} className={cx("user-card_link")}  onClick={handleScrollUp}>
                    <img className={cx("user-card_avatar")} src={avatar} alt="avatarUser" />
                    <div className={cx("user-card_inf")}>
                        <div className={cx("user-card_name")}>{name}</div>
                        <span className={cx("user-card_article")}>{info}</span>
                    </div>
                </Link>
                <button className={cx("btn-follow")}>Follow</button>
            </div>
            <div className={cx("user-article")}>
                <div className={cx("user-article_title")}>
                    <Link to={config.routes.article  + `/${idArticle}`} onClick={handleScrollUp}>
                        {fixTitle}
                    </Link>
                    <Link to={config.routes.home} className={cx("article-topic")}>
                        <p>{topic}</p>
                        <p>{description}</p>
                    </Link>
                </div>
                <div className={cx("slider-show_group")}>
                    <img src={image[0]} alt="" onClick={handleSliderShow} />
                    <div className={cx("group-more")}>
                        <FontAwesomeIcon icon={faClone} className={cx("icon-more")} />
                        <span className={cx("counter-more")}>+ {lenght}</span>
                    </div>
                </div>
            </div>
            <div className="fui-connect-icon">
                <ul className="icon-list">
                    <li className={like} onClick={handleLike}>
                        <div className="icon-link">
                            <div className="icon">
                                <FontAwesomeIcon className={cx("icon-heart")} icon={faHeart} />
                            </div>
                            <span className="text">{(like === 'icon-item') ? 'Favourite': 'Favourited'}</span>
                        </div>
                    </li>
                    <li className="icon-item">
                        <div className="icon-link">
                            <div className="icon">
                                <FontAwesomeIcon className={cx("icon-heart")} icon={faComment} />
                            </div>
                            <span className="text">Comment</span>
                        </div>
                    </li>
                    <li className={copy} onClick={handleCopyToClip}>
                        <div className="icon-link">
                            <div className="icon">
                                <FontAwesomeIcon className={cx("icon-heart")} icon={faShareNodes} />
                            </div>
                            <span className="text">{!copied ? 'Copy link' : 'Copied'}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={show}>
                <div className={cx("slider-show_top-bar")}>
                    <div className={cx("top-bar_counter")}>
                        {current + 1} / {lenght}
                    </div>
                    <FontAwesomeIcon className={cx("slider-show_icon")} icon={faCircleXmark} onClick={handleSliderHide} />
                </div>
                <div className={cx("slider-show_group")}>
                    <FontAwesomeIcon icon={faAngleLeft} className={cx("btn-show")} onClick={prevSlide} />
                    <img src={image[current]} alt="" className={cx("slider-show_img")} />
                    <FontAwesomeIcon icon={faAngleRight} className={cx("btn-show")} onClick={nextSlide} />
                </div>
            </div>
        </div>
    );
}

export default Article;