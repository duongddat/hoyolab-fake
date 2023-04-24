import { useParams } from "react-router-dom";
import {articleUser} from "../../constants";
import classNames from "classnames/bind";

import styles from "./Article.scss";

const cx = classNames.bind(styles);
function Article() {
    const {id} = useParams();
    const article = articleUser.find(a => a.idArticle.toString() === id);

    return ( 
        <div className={cx("body-wrapper")}> 
            <div className={cx("body-container")}>
                <h2 className={cx("artlce-header")}>Post Details Page</h2>
                {article.title}
            </div>
        </div> 
    );
}

export default Article;