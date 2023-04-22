import classNames from "classnames/bind";

import  { articleUser } from "../../constants";
import styles from "./home.scss";
import Article from "../../components/Article";

const cx = classNames.bind(styles);
function Home() {
    return ( 
        <div className={cx("body-wrapper")}>
            {articleUser.map(article => (
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
            ))}
        </div> 
    );
}

export default Home;