import classNames from "classnames/bind";
import styles from "./Poper.scss";

const cx = classNames.bind(styles);
function Wrapper({ children}) {
    return (
        <div className={cx("popper-wrapper")}>
            {children}
        </div>
    );
}

export default Wrapper;