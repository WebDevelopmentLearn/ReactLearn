import {useContext} from "react";
import LangContext from "../../../context/LangContext";
import styles from "./SwitchLangBtn.module.scss";


export function SwitchLangBtn() {
    const {lang, setLang} = useContext(LangContext);

    function switchLang() {
        lang === "ru" ? setLang("en") : setLang("ru");
    }

    return (
        <button className={styles.SwitchLangBtn} onClick={switchLang}>
            {lang === "ru" ? <span>RU</span> : <span>EN</span>}


        </button>
    )
}