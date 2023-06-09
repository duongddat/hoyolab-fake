import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faImage, faPenToSquare, faRightFromBracket, faUserAstronaut, faVideo } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import logo from '../../../assets/logo/logo.png';
import styles from './header.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../config';
import {Wrapper as PopperWrapper} from '../../Poper';

const cx = classNames.bind(styles);
function Header() {
    const [active, setActive] = useState("user-post");

    const handleHover = () => {
        setActive("user-post active");
    }

    const handleOver = () => {
        setActive("user-post");
    }

    return ( 
        <header className={cx('header-wrapper')}>
            <Link className={cx('header-logo')} to={config.routes.home}>
                <img src={logo} alt="logo"/>
                <h1 className={cx('header-logo_title')}>HoYoTab</h1>
            </Link>
            <nav className={cx('nav')}>
                <Menu>
                    <MenuItem title="Home" to={config.routes.home}/>
                    <MenuItem title="Follow" to={config.routes.following}/>
                    <MenuItem title="Profile" to={config.routes.profile + '/10010'}/>
                    <MenuItem title="Contact" to={config.routes.contact}/>
                </Menu>
            </nav>
            <div className={cx('header-user')}>
                <Tippy
                    interactive='true'
                    placement='bottom-end'
                    render={attrs => (
                        <div className={cx("user-post-list")} onMouseOver={handleHover} onMouseOut={handleOver} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('user-post-item')}>
                                    <Link className={cx("post-item-dialog")} to={config.routes.upload}>
                                        <FontAwesomeIcon className={cx("post-icon-item post-icon-pen")} icon={faPenToSquare}/>
                                        <span>Post</span>
                                        <FontAwesomeIcon className={cx("post-icon-arrow")} icon={faAngleRight}/>
                                    </Link> 
                                </div>
                                <div className={cx('user-post-item')}>
                                    <Link className={cx("post-item-dialog")} to={config.routes.upload}>
                                        <FontAwesomeIcon className={cx("post-icon-item post-icon-image")} icon={faImage}/>
                                        <span>Image</span>
                                        <FontAwesomeIcon className={cx("post-icon-arrow")} icon={faAngleRight}/>
                                    </Link> 
                                </div>
                                <div className={cx('user-post-item')} >
                                    <Link className={cx("post-item-dialog")} to={config.routes.upload}>
                                        <FontAwesomeIcon className={cx("post-icon-item post-icon-video")} icon={faVideo}/>
                                        <span>Video</span>
                                        <FontAwesomeIcon className={cx("post-icon-arrow")} icon={faAngleRight}/>
                                    </Link> 
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                    >
                    <button className={cx(active)}>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </button>
                </Tippy>
                <Tippy
                    interactive='true'
                    placement='bottom-end'
                    render={attrs => (
                        <div className={cx("user-post-list")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx("user-account")}>
                                    <div className={cx("user-account__title")}>My Imformation</div>
                                    <div className={cx("user-account-menu-item")}>
                                        <Link  className={cx("user-account-menu-item__content")} to={config.routes.profile + '/10010'}>
                                            <FontAwesomeIcon className={cx("account-menu-item__icon")} icon={faUserAstronaut}/>
                                            <span>Personal Homepage</span>
                                            <FontAwesomeIcon className={cx("post-icon-arrow")} icon={faAngleRight}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx("user-account")}>
                                    <div className={cx("user-account__title")}>System Settings</div>
                                    <div className={cx("user-account-menu-item")}>
                                        <Link  className={cx("user-account-menu-item__content")} to={config.routes.login}>
                                            <FontAwesomeIcon className={cx("account-menu-item__icon")} icon={faRightFromBracket}/>
                                            <span>Log out</span>
                                        </Link>
                                    </div>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                    >
                    <img className={cx('user-avatar')} src="https://techraptor.net/sites/default/files/styles/image_header/public/2021-08/YoimiyaGenshinHeader.jpeg?itok=4vYkJQjK" alt=""/>
                </Tippy>      
            </div>
        </header>
     );
}

export default Header;