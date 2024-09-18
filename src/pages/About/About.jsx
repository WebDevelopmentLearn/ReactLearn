
import {useNavigate} from "react-router-dom";
import styles from "./About.module.scss";
import LangContext from "../../context/LangContext";
import {useContext} from "react";
import {Navbar} from "../../components";
export function About() {

    const navigate = useNavigate();

    const {lang} = useContext(LangContext);
    return (
        <div>
            <Navbar />
            <div className={styles.AboutContainer}>
                <h1 style={{fontSize: "32px"}}>{lang === "ru" ? "О нас" : "About us"}</h1>
                <p>{lang === "ru" ? "Сайт для домашнего задания #11" : "Site for Homework #11"}</p>
                <p>{lang === "ru" ? "Исходный код" : "Sources"}: <a href="https://github.com/WebDevelopmentLearn/ReactLearn/blob/hw11">Github</a></p>

                <button className={styles.btn} onClick={() => navigate("/")}>{lang === "ru" ? "Вернуться на главную" : "Back to Home page"}</button>
            </div>
        </div>
    )
}