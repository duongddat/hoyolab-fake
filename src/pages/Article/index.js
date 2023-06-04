import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam, faHeart, faMessage, faShare, faStar } from "@fortawesome/free-solid-svg-icons";

import { articleUser, users } from "../../constants";
import styles from "./Article.scss";
import config from "../../config";

const cx = classNames.bind(styles);
function Article() {
    const { id } = useParams();
    const article = articleUser.find(a => a.idArticle.toString() === id);
    const checkFollow = users.find(user => user.idUser === article.idUser);

    const [activeThumb, setActiveThumb] = useState();

    //show reply chat in chat box
    const [index, setIndex] = useState(null);

    const handleReply = (index) => {
        setIndex(index);
    };

    return (
        <div className={cx("body-wrapper")}>
            <div className={cx("body-container")}>
                <div className={cx("article-header")}>
                    <h4>Post Details Page</h4>
                </div>
                <div className={cx("article-wrp")}>
                    <div className={cx("article-title")}>
                        <h1>{article.title}</h1>
                    </div>
                    <div className={cx("article-content")}>
                        <div className={cx("article-user")}>
                            <Link to={config.routes.profile + `/${article.idUser}`}>
                                <img src={article.avatar} alt={article.name} className={cx("article-user-avt")} />
                            </Link>
                            <div className={cx("article-user-info")}>
                                <div className={cx("article-user-info_name")}>
                                    <Link to={config.routes.profile + `/${article.idUser}`}>
                                        <span>{article.name}</span>
                                    </Link>
                                </div>
                                <div className={cx("article-info")}>
                                    <span>{article.info}</span>
                                </div>
                            </div>
                            <button className={checkFollow.follow ? "btn btn-following" : "btn btn-follow"}>{checkFollow.follow ? "Following" : "Follow"}</button>
                        </div>

                        <Swiper
                            loop={true}
                            spaceBetween={12}
                            slidesPerView={4}
                            modules={[Thumbs]}
                            grabCursor={true}
                            onSwiper={setActiveThumb}
                            className={cx("article-swiper-wrapper")}
                        >
                            {
                                article.image.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={img} alt="" className={cx("article-swiper-thumbs")} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <Swiper
                            loop={true}
                            spaceBetween={10}
                            modules={[Navigation, Thumbs]}
                            thumbs={{ swiper: activeThumb }}
                            className={cx("article-swiper-slider")}
                        >
                            {
                                article.image.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={img} alt="" className={cx("article-swiper-img")} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className={cx("article-footer")}>
                        <div className={cx("article-footer_from")}>
                            <span>Genshin Impact - HoyoLaB</span>
                        </div>
                        <div className={cx("article-footer_topic")}>
                            <span>{article.topic}</span>
                            <span>{article.description}</span>
                        </div>
                        <div className={cx("article-footer-stats")}>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faMessage} className={cx("article-footer-stats_item__icon")} />
                                <span>3</span>
                            </div>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faStar} className={cx("article-footer-stats_item__icon")} />
                                <span>10</span>
                            </div>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faHeart} className={cx("article-footer-stats_item__icon")} />
                                <span>9</span>
                            </div>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faShare} className={cx("article-footer-stats_item__icon")} />
                                <span>99+</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("article-ql")}>
                        <div className={cx("ql-container")}>
                            <input type="text" placeholder=" " className={cx("ql-input")} />
                            <label htmlFor="name" className={cx("ql-label")}>Post your comment now~</label>
                        </div>
                        <div className={cx("group-reply")}>
                            <FontAwesomeIcon icon={faFaceLaughBeam} className={cx("reply-icon")} />
                            <button className={cx("btn btn-follow btn-send")}>Send</button>
                        </div>
                    </div>
                </div>
                <div className={cx("article-reply-list")}>
                    <div className={cx("article-reply-list_header")}>
                        <span>All comments {article.comment.length}</span>
                    </div>
                    {
                        article.comment.length > 0 &&
                        (
                            article.comment.map((comment, i) => (
                                <div key={i} className={cx("reply-card")}>
                                    <div className={cx("reply-card-left")}>
                                        <Link to={config.routes.profile + `/${comment.idUser}`} className={cx("reply-card_link")}>
                                            <img src={comment.avatar} alt="user avatar" className={cx("reply-card_avatar")} />
                                        </Link>
                                    </div>
                                    <div className={cx("reply-card-container")}>
                                        <div className={cx("reply-card-header")}>
                                            <Link to={config.routes.profile + `/${comment.idUser}`} className={cx("reply-card_nickname")}>
                                                {comment.name}
                                                <p>Fan</p>
                                            </Link>
                                        </div>
                                        <div className={cx("reply-card-content")}>
                                            <p>{comment.reply}</p>
                                        </div>
                                        <div className={cx("reply-card-operation")}>
                                            <span className={cx("reply-card_time")}>{comment.replyTime}</span>
                                            <div className={cx("reply-card-operation_bottom")}>
                                                <div className={cx("article-footer-stats_item")} onClick={() => handleReply(i)}>
                                                    <FontAwesomeIcon icon={faMessage} className={cx("article-footer-stats_item__icon")} />
                                                    <span>Comments</span>
                                                </div>
                                                <div className={cx("article-footer-stats_item")}>
                                                    <FontAwesomeIcon icon={faHeart} className={cx("article-footer-stats_item__icon")} />
                                                    <span>9</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={i !== index ? 'article-ql' : 'article-ql show'}>
                                            <div className={cx("ql-container")}>
                                                <input type="text" placeholder=" " className={cx("ql-input")} />
                                                <label htmlFor="name" className={cx("ql-label")}>Post your comment now~</label>
                                            </div>
                                            <div className={cx("group-reply")}>
                                                <FontAwesomeIcon icon={faFaceLaughBeam} className={cx("reply-icon")} />
                                                <button className={cx("btn btn-follow btn-send")}>Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                    <div className={cx("article-page-reply-list__loadmore")}>
                        <div className={cx("loadmore__nomore")}>
                            {article.comment.length > 0 ? 'That\'s all~' : 'No comments yet~'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;