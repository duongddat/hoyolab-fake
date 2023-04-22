import { useParams } from "react-router-dom";
import {articleUser} from "../../constants";

function Article() {
    const {id} = useParams();
    const article = articleUser.find(a => a.idArticle.toString() === id);

    return ( <div>
        {article.title}
    </div> );
}

export default Article;