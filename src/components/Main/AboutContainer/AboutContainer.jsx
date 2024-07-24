import {useContext} from "react";
import LangContext from "../../../contexts/LangContext";
import styles from "./AboutContainer.module.css";
function AboutContainer() {

    const currentLang = useContext(LangContext);
    // console.log(currentLang);
    return (
        <div className={styles.AboutContainer}>
            <h1>{currentLang === "ru" ? "Как это работает?" : "How does it work?"}</h1>
            <p>{currentLang === "ru" ?
                `Всё довольно просто! Вам необходимо указать реальное имя пользователя, зарегистрированное на сайте
          <b>CodeWars</b>, после чего нажать кнопку "<i>Получить статистику</i>"` : `It's pretty simple! You need to specify the real user name registered on the site
          <b>CodeWars</b>, then click "<i>Get statistics</i>"`}</p>
        </div>
    )
}

export default AboutContainer;