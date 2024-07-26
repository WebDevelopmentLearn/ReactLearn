import {useContext} from "react";
import LangContext from "../../../contexts/LangContext";
import styles from "./SwitchLangBtn.module.scss";

function SwitchLangBtn() {
    const {lang, setLang} = useContext(LangContext);

    function switchLang() {
        lang === "ru" ? setLang("en") : setLang("ru");
    }

    return (
        <button className={styles.SwitchLangBtn} onClick={switchLang}>
            {lang === "ru" ? "RU" : "EN"}

            <div>
                <p></p>
                <p></p>
            </div>
        </button>
    )
}

export default SwitchLangBtn;