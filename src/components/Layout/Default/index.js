import classNames from "classnames/bind";

import Header from "../Header";
import styles from "./Default.scss";

const cx = classNames.bind(styles);
function Layout({children}) {
    return ( 
        <aside>
            <Header/>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    {children}
                </div>
                <div className={cx("side-layout")}>
                    Side-column
                </div>
            </div>
        </aside>
     );
}

export default Layout;