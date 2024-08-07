import {useContext, useEffect, useState} from "react";
import {fetchPosts} from "../../api/API";
import {Navbar} from "../Navbar/Navbar";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import styles from "./Posts.module.scss";
import LangContext from "../../context/LangContext";
import {formatDate} from "../../utils/Utils";

export function Posts() {
    //Состояния
    const [posts, setPosts] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);

    //Контекст
    const {lang} = useContext(LangContext);

    //Параметры из URL
    const {pageId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts(pageId)
            .then(({ data, isLastPage }) => {
                setPosts(data);
                setIsLastPage(isLastPage);
            })
            .catch(() => {
                console.error("Error");
            });
    }, [pageId]);



    return (
        <div>
            <Navbar />
            <div className={styles.PostsContainer}>
                <h1 style={{fontSize: "32px"}}>{lang === "ru" ? "Посты" : "Posts"}</h1>
                {posts.map(post => (
                    <Link className={styles.postContainer} key={post.id} to={`/posts/post/${post.id}`}>
                        <div className={styles.authorInfo}>
                            <img className={styles.postAvatar} src={post.avatar} alt=""/>
                            <p className={styles.postAuthor}>{post.name}</p>
                        </div>
                        <h1 className={styles.postTitle}>{post.title}</h1>

                        <p className={styles.postCreatedAt}>{formatDate(post.createdAt, lang)}</p>
                        <p className={styles.postId}>{post.id}</p>
                    </Link>

                ))}
                <div style={{display: "flex", gap: "4px"}}>
                    {pageId > 1 && (
                        <button className={styles.btn} onClick={() => navigate(`/posts/${Number(pageId) - 1}`)}>
                            {lang === "ru" ? "Назад" : "Back"}
                        </button>
                    )}
                    {!isLastPage && (
                        <button className={styles.btn} onClick={() => navigate(`/posts/${Number(pageId) + 1}`)}>
                            {lang === "ru" ? "Далее" : "Next"}
                        </button>
                    )}
                </div>
                <button className={styles.btn}
                        onClick={() => navigate("/")}>{lang === "ru" ? "Вернуться на главную" : "Back to Home page"}</button>
            </div>
        </div>
    )
}