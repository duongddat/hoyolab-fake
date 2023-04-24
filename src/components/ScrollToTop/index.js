import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./ScrollToTop.scss";

const cx = classNames.bind(styles);
function ScrollToTop() {
    const [blackToTop, setBlackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBlackToTop(true);
            } else {
                setBlackToTop(false);
            }
        })
    }, [])

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return ( 
        <div className={cx("scroll-to-top")}>
            {blackToTop && (
                <img src="https://www.hoyolab.com/_nuxt/img/9597330.png" alt="btnToTop" className={cx("btn-to-top")} onClick={handleScrollUp} />
            )}
        </div>
     );
}

export default ScrollToTop;