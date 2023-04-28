import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { articleUser } from "../../constants";
import classNames from "classnames/bind";
import { Swiper ,SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Article.scss";
import config from "../../config";
import { Navigation, Thumbs } from "swiper";
import { faHeart, faMessage, faShare, faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Article() {
    const { id } = useParams();
    const article = articleUser.find(a => a.idArticle.toString() === id);

    const [activeThumb, setActiveThumb] = useState();

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
                            <button className={cx("btn-follow")}>Follow</button>
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
                                        <img src={img} alt="" className={cx("article-swiper-thumbs")}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <Swiper
                            loop={true}
                            spaceBetween={10}
                            modules={[Navigation ,Thumbs]}
                            thumbs={{swiper : activeThumb}}
                            className={cx("article-swiper-slider")}
                        >
                            {
                                article.image.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={img} alt="" className={cx("article-swiper-img")}/>
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
                            <span>#Topic</span>
                            <span>#Description</span>
                        </div>
                        <div className={cx("article-footer-stats")}>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faMessage} className={cx("article-footer-stats_item__icon")}/>
                                <span>3</span>
                            </div>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faStar} className={cx("article-footer-stats_item__icon")}/>
                                <span>10</span>
                            </div>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faHeart} className={cx("article-footer-stats_item__icon")}/>
                                <span>9</span>
                            </div>
                            <div className={cx("article-footer-stats_item")}>
                                <FontAwesomeIcon icon={faShare} className={cx("article-footer-stats_item__icon")}/>
                                <span>99+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;