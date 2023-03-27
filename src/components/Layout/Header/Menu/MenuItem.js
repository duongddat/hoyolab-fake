import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Menu.scss';

const cx = classNames.bind(styles);

function MenuItem({title, to}) {
    return ( 
        <NavLink className={(nav) => cx('menu-item', {active: nav.isActive})} to={to}>
            <span className={cx("menu-item-title")}>
                {title}
            </span>
            <div className="underline"/>
        </NavLink>
     );
}

export default MenuItem;