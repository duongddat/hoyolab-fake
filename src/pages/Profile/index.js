import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Profile.scss';
import { users, articleUser } from '../../constants';
import Article from '../../components/Article';
import Side from '../../components/Layout/Default/Side';

const cx = classNames.bind(styles);
function Profile() {
    const { idUser } = useParams();
    const profile = users.find(a => a.idUser.toString() === idUser);
    const article = articleUser.filter(a => a.idUser === profile.idUser);

    return (
        <div className={cx("profile-container")}>
            <div className={cx("profile-bg")}>
                <div className={cx("profile-bg_wrapper")}>
                    <img src={profile.background} alt='' />
                    <div className={cx("profile-bg_bot-mark")}></div>
                </div>
            </div>
            <div className={cx("profile-content")}>
                <div className={cx("layout-topbar")}>
                    <div className={cx("mhy-topbar")}>
                        <div className={cx("mhy-topbar_container")}>
                            <div className={cx("account-center-topbar_container")}>
                                <div className={cx("account-cetner-avatar-wrap")}>
                                    <div className={cx("mhy-avatar")}>
                                        <img className={cx("mhy-avatar_img")} src={profile.avatar} alt='' />
                                        <img className={cx("mhy-avatar_pendant")} src='https://upload-os-bbs.hoyolab.com/upload/2023/03/15/ff54bed1904b16cc0279b5e01fe64441_8938851781430562575.png?x-oss-process=image/resize,m_fixed,h_318,w_318' alt='' />
                                    </div>
                                </div>
                                <div className={cx("account-center-user-wrap")}>
                                    <div className={cx("account-center-basic-top")}>
                                        <span className={cx("user-basic-nickname")}>{profile.name}</span>
                                        <div className={cx("mhy-account-title_level")}>
                                            <span>Lv.15</span>
                                        </div>
                                    </div>
                                    <div className={cx("account-center-basic-bottom")}>
                                        <div className={cx("account-center-basic-item")}>
                                            <span className={cx("account-center-basic-num")}>{article.length}</span>
                                            <span className={cx("account-center-basic-name")}>POST</span>
                                            <span className={cx("account-center-basic-split")}>/</span>
                                        </div>
                                        <div className={cx("account-center-basic-item")}>
                                            <span className={cx("account-center-basic-num")}>{profile.following}</span>
                                            <span className={cx("account-center-basic-name")}>FOLLOWING</span>
                                            <span className={cx("account-center-basic-split")}>/</span>
                                        </div>
                                        <div className={cx("account-center-basic-item")}>
                                            <span className={cx("account-center-basic-num")}>{profile.follower}</span>
                                            <span className={cx("account-center-basic-name")}>FOLLOWER</span>
                                            <span className={cx("account-center-basic-split")}>/</span>
                                        </div>
                                        <div className={cx("account-center-basic-item")}>
                                            <span className={cx("account-center-basic-num")}>{profile.like}</span>
                                            <span className={cx("account-center-basic-name")}>LIKE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("account-center-btn")}>
                                    <button className={cx("btn-follow")}>{profile.idUser === 10010 ? 'Edit' : 'Follow'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    <div className={cx("body-wrapper")}>
                        {
                            article.length > 0 ?
                                article.map(article => (
                                    <Article
                                        key={article.id}
                                        idUser={article.idUser}
                                        idArticle={article.idArticle}
                                        avatar={article.avatar}
                                        name={article.name}
                                        info={article.info}
                                        title={article.title}
                                        topic={article.topic}
                                        description={article.description}
                                        image={article.image}
                                    />
                                ))
                                :
                                <div className={cx("body-container")}>
                                    <div className={cx("mhy-data-lg")}>
                                        <img src='https://www.hoyolab.com/_nuxt/img/56a30a4.png' alt='' />
                                        <p className={cx("mhy-data-lg_text")}>No posts yet~</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className={cx("side-layout")}>
                    <Side />
                </div>
            </div>
        </div>
    );
}

export default Profile;