import {useContext} from "react";
import LangContext from "../../../contexts/LangContext";
import styles from "./AboutContainer.module.scss";
function AboutContainer() {

    const {lang} = useContext(LangContext);
    // console.log(currentLang);


    const ENG_TEXT = (
        <>
            <span>
                It's pretty simple! You need to specify the real username registered on the site <b>CodeWars</b>, then click "<i>Get statistics</i>"
            </span>
        </>
    );

    const RU_TEXT = (
        <>
            <span>
                Всё довольно просто! Вам необходимо указать реальное имя пользователя, зарегистрированное на сайте <b>CodeWars</b>, после чего нажать кнопку "<i>Получить статистику</i>"
            </span>
        </>
    );



    return (
        <div className={styles.AboutContainer}>
            <h1>{lang === "ru" ? "Как это работает?" : "How does it work?"}</h1>
            <p>{lang === "ru" ?
                RU_TEXT : ENG_TEXT}</p>
        </div>
    )
}

export default AboutContainer;