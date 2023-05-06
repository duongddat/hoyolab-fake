import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import config from "../../config";
import { users, articleUser } from '../../constants';
import styles from './Following.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Article from "../../components/Article";

const cx = classNames.bind(styles);
function Following() {
    const [hide, setHide] = useState(false);
    const [index, setIndex] = useState(null);

    const handleHide = () => {
        hide ? setHide(false) : setHide(true);
    }

    //Set show and detail following user
    const handleShow = (i) => {
        if (i === index) {
            setIndex(null);
        }
        else {
            setIndex(i);
        }
    }

    return (
        <div className={cx("body-wrapper")}>
            <div className={cx("body-container")}>
                <div className={cx("topic-header")}>
                    <div className={cx("topic-header-group")}>
                        <h3 className={cx("topic-header_title")}>Joined Topics</h3>
                        <p className={cx("topic-header_more")} onClick={handleHide}>{hide ? 'View less' : 'View more'}</p>
                    </div>
                </div>
                <div className={cx("topic-content")}>
                    <div className={cx("topic-card")}>
                        <div className={cx("topic-card-content")}>
                            <div className={cx("topic-card-left")}>
                                <img src='https://webstatic-sea.hoyoverse.com/upload/static-resource/2022/02/17/3ec9753cfad43438adbf4fd11b66c904_454482903905697812.png?x-oss-process=image%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp' alt='' />
                            </div>
                            <div className={cx("topic-card-right")}>
                                <div className={cx("topic-card-header__wrp")}>
                                    <img src='https://www.hoyolab.com/_nuxt/img/fa54dd5.png' alt='' />
                                    <span className={cx("topic-card-name")}>OST</span>
                                </div>
                                <p className={cx("topic-card-desc")}>The Shimmering Voyage Vol.2</p>
                                <p className={cx("topic-card-stats")}>7,474 posts / 0 members</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx("topic-card")}>
                        <div className={cx("topic-card-content")}>
                            <div className={cx("topic-card-left")}>
                                <img src='https://upload-os-bbs.hoyolab.com/upload/2022/08/19/e33d91875c7cb8b49e1e9c4d05fcdc76_2605660456653465569.png?x-oss-process=image%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp' alt='' />
                            </div>
                            <div className={cx("topic-card-right")}>
                                <div className={cx("topic-card-header__wrp")}>
                                    <img src='https://www.hoyolab.com/_nuxt/img/fa54dd5.png' alt='' />
                                    <span className={cx("topic-card-name")}>Team Wisdom</span>
                                </div>
                                <p className={cx("topic-card-desc")}>HoYo Quiz 2.0: Only wisdom can unravel those ancient mysteries…</p>
                                <p className={cx("topic-card-stats")}>7,474 posts / 0 members</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx("topic-card")}>
                        <div className={cx("topic-card-content")}>
                            <div className={cx("topic-card-left")}>
                                <img src='https://webstatic-sea.hoyoverse.com/upload/static-resource/2022/02/17/3ec9753cfad43438adbf4fd11b66c904_454482903905697812.png?x-oss-process=image%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp' alt='' />
                            </div>
                            <div className={cx("topic-card-right")}>
                                <div className={cx("topic-card-header__wrp")}>
                                    <img src='https://www.hoyolab.com/_nuxt/img/fa54dd5.png' alt='' />
                                    <span className={cx("topic-card-name")}>A Walk Through the Woods</span>
                                </div>
                                <p className={cx("topic-card-desc")}>A Walk Through the Woods</p>
                                <p className={cx("topic-card-stats")}>705k posts / 0 members</p>
                            </div>
                        </div>
                    </div>
                    <div className={hide ? "topic-card" : 'topic-card hide'}>
                        <div className={cx("topic-card-content")}>
                            <div className={cx("topic-card-left")}>
                                <img src='https://img-os-static.mihoyo.com/upload/2020/12/23/a56b68d3cde1735002e91c8ae5b68537.png' alt='' />
                            </div>
                            <div className={cx("topic-card-right")}>
                                <div className={cx("topic-card-header__wrp")}>
                                    <img src='https://www.hoyolab.com/_nuxt/img/fa54dd5.png' alt='' />
                                    <span className={cx("topic-card-name")}>Guides & Walkthroughs</span>
                                </div>
                                <p className={cx("topic-card-desc")}>Resources about quests, characters, domains, and materials~</p>
                                <p className={cx("topic-card-stats")}>170k posts / 334k members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("body-container")}>
                <div className={cx("topic-header")}>
                    <div className={cx("topic-header-group")}>
                        <h3 className={cx("topic-header_title")}>Following Account</h3>
                    </div>
                </div>
                {users
                    .filter(user => user.follow)
                    .map((user, i) => (
                        <div key={i} className={cx("following-card")} onClick={() => handleShow(i)}>
                            <div className={cx("following-review")}>
                                <div className={cx("following-user")}>
                                    <Link to={config.routes.profile + `/${user.idUser}`}>
                                        <img src={user.avatar} alt={user.name} className={cx("following-user-avt")} />
                                    </Link>
                                    <div className={cx("following-user-info")}>
                                        <div className={cx("following-user-info_name")}>
                                            <Link to={config.routes.profile + `/${user.idUser}`}>
                                                <span>{user.name}</span>
                                            </Link>
                                            <div className={cx("following-user-dt")}>Following date: {user.followDate}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("icon-detail")}>
                                    <FontAwesomeIcon className={i === index ? 'show' : 'hide'} icon={faAngleUp} />
                                    <FontAwesomeIcon className={i === index ? 'hide' : 'show'} icon={faAngleDown} />
                                </div>
                            </div>
                            <div className={index === i ? 'following-detail show-detail' : 'following-detail'}>
                                <div className={cx("detail-item")}>
                                    <span className={cx("detail-item_name")}>POST:</span>
                                    <span className={cx("detail-item_num")}>{articleUser.filter(article => article.idUser === user.idUser).length}</span>
                                    <span className={cx("detail-item_split")}>/</span>
                                </div>
                                <div className={cx("detail-item")}>
                                    <span className={cx("detail-item_name")}>FOLLOWING:</span>
                                    <span className={cx("detail-item_num")}>{user.following}</span>
                                    <span className={cx("detail-item_split")}>/</span>
                                </div>
                                <div className={cx("detail-item")}>
                                    <span className={cx("detail-item_name")}>FOLLOWER:</span>
                                    <span className={cx("detail-item_num")}>{user.follower}</span>
                                    <span className={cx("detail-item_split")}>/</span>
                                </div>
                                <div className={cx("detail-item")}>
                                    <span className={cx("detail-item_name")}>LIKE:</span>
                                    <span className={cx("detail-item_num")}>{user.like}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {users
                .filter(user => user.follow)
                .map((user, i) => (
                    <div className={cx("list-following")} key={i}>
                        {articleUser.filter(article => article.idUser === user.idUser)
                            .map((art) => (
                                <Article
                                    key={art.id}
                                    idUser={art.idUser}
                                    idArticle={art.idArticle}
                                    avatar={art.avatar}
                                    name={art.name}
                                    info={art.info}
                                    title={art.title}
                                    topic={art.topic}
                                    description={art.description}
                                    image={art.image}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Following;