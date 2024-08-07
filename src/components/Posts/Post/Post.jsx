import {Navbar} from "../../Navbar/Navbar";
import {useNavigate, useParams} from "react-router-dom";
import LangContext from "../../../context/LangContext";
import {useContext, useEffect, useState} from "react";
import styles from "./Post.module.scss";
import { fetchPost } from "../../../api/API";
import Loader from "../../Loader/Loader";

export function Post() {
    const [post, setPost] = useState(null);
    const {postId} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetchPost(postId).then((res) => setPost(res));
    }, [postId]);


    //Контекст
    //Контекст
    const { lang } = useContext(LangContext);




    return (
        <div>
            <Navbar/>
            {post ? (<div className={styles.Post}>
                <div className={styles.authorInfo}>
                    <img src={post.avatar} alt="avatar"/>
                    <h2>{lang === "ru" ? "Автор" : "Author"}: {post.name}</h2>
                </div>

                <div className={styles.postInfo}>
                    <h2>{lang === "ru" ? "Название поста" : "Post title"}: {post.title}</h2>
                    <p>{lang === "ru" ? "Описание поста" : "Post description"}: {post.body}</p>
                    <p>{lang === "ru" ? "Номер поста" : "Post number"}: {post.id}</p>
                    <p>{lang === "ru" ? "Дата публикации" : "Publication date"}: {post.createdAt}</p>
                </div>


                <button
                    className={styles.btn}
                    onClick={() => navigate(-1)}>{lang === "ru" ? "Вернуться к постам" : "Return to posts"}
                </button>
            </div>) : (<Loader/>)}
        </div>


    )
}