import {Navbar} from "../../Navbar/Navbar";
import {useLocation, useNavigate} from "react-router-dom";
import LangContext from "../../../context/LangContext";
import {useContext} from "react";

export function Post() {
    const location = useLocation();

    const navigate = useNavigate();

    //Контекст
    const {lang} = useContext(LangContext);
    console.log(location);
    return (
        <div>
            <Navbar />
            <h1>Post</h1>
            <div>
                <h2>{location?.state?.postTitle}</h2>
                <p>{location?.state?.postBody}</p>
                <p>{location?.state?.postId}</p>
                <p>{location?.state?.postCreatedAt}</p>
                <button onClick={() => navigate(`/posts/${location?.state?.page}`)}>{lang === "ru" ? "Вернуться к постам" : "Return to posts"}</button>
            </div>
        </div>
    )
}