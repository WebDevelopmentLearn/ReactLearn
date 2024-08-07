
import {useNavigate} from "react-router-dom";
import s from "./Home.module.scss";
import {Navbar} from "../Navbar/Navbar";
import styles from "./Home.module.css";
import LangContext from "../../context/LangContext";
import {useContext} from "react";

export function Home() {

    const navigate = useNavigate();
    const {lang} = useContext(LangContext);
    return (
        <div>
            <Navbar />
            <div className={styles.HomeContainer}>
                <h1 style={{fontSize: "32px"}}>{lang === "ru" ? "Домашняя страница" : "Homepage"}</h1>
                <p>{lang === "ru" ? "Здесь ничего нет. Правда" : "There's nothing here. Is it true"}</p>
                <button className={s.btn} onClick={() => navigate("/about?userId=3",
                    {
                        state: {
                            message: "Hello there!"
                        },
                        replace: true
                    }
                )}>{lang === "ru" ? "О нас" : "About us"}
                </button>
            </div>

        </div>
    )
}