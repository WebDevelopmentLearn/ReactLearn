import {useContext, useEffect, useState} from "react";
import {fetchPosts} from "../../api/API";
import {Navbar} from "../Navbar/Navbar";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Posts.module.scss";
import LangContext from "../../context/LangContext";
import {formatDate} from "../../utils/Utils";

export function Posts() {
    //Состояния
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);

    //Контекст
    const {lang} = useContext(LangContext);

    //Параметры из URL
    const {pageId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts(page)
            .then(({data, isLastPage}) => {
            setPosts(data);
            setIsLastPage(isLastPage);
            })
            .catch(() => {
                console.error("Error");
            });
    }, [page]);

    function handleNextPage() {
        setPage(page + 1);
        pageId && navigate(`/posts/${page}`);
    }

    function handlePrevPage() {
        setPage(page - 1);
        pageId && navigate(`/posts/${page}`);
    }



    function handleOpenPost(post) {
        //"/about?userId=3"
        navigate(`/posts/post/${post.id}`, {
            state: {
                postId: post.id,
                postTitle: post.title,
                postBody: post.body,
                postCreatedAt: formatDate(post.createdAt),
                page: page
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className={styles.PostsContainer}>
                {posts.map(post => (
                    <div onClick={() => handleOpenPost(post)} className={styles.postContainer} key={post.id}>
                        <h1 className={styles.postTitle}>{post.title}</h1>
                        <p className={styles.postCreatedAt}>{formatDate(post.createdAt)}</p>
                        <p className={styles.postId}>{post.id}</p>
                    </div>
                ))}
                <div>
                    {page > 1 && <button className={styles.btn} onClick={handlePrevPage}>{lang === "ru" ? "Назад" : "Back"}</button>}
                    {!isLastPage && <button className={styles.btn} onClick={handleNextPage}>{lang === "ru" ? "Далее" : "Next"}</button>}
                </div>
                <button className={styles.btn}
                        onClick={() => navigate("/")}>{lang === "ru" ? "Вернуться на главную" : "Back to Home page"}</button>
            </div>
        </div>
    )
}