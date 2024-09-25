import {Navbar} from "../../components";
import styles from "../NotFound/NotFound.module.scss";
import s from "../NotFound/NotFound.module.scss";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import LangContext from "../../context/LangContext";

export const NotFound = () => {
    const navigate = useNavigate();
    const {lang} = useContext(LangContext);

    return (
        <div>
            <Navbar/>
            <div className={styles.NotFoundContainer}>
                {/*<h1 style={{fontSize: "32px"}}>{lang === "ru" ? "Домашняя страница" : "Homepage"}</h1>*/}
                <h1>404</h1>
                <h1>{lang === "ru" ? "Запрашиваемая страница не найдена" : "The requested page was not found"}</h1>
                <button className={s.btn} onClick={() => navigate("/")}>{lang === "ru" ? "На главную" : "To Homepage"}
                </button>
            </div>

        </div>
    )
}