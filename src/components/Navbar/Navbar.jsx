import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {SwitchLangBtn} from "./SwitchLangBtn/SwitchLangBtn";
import LangContext from "../../context/LangContext";
import {useContext} from "react";

export function Navbar() {

    const {lang} = useContext(LangContext);

    return (
        <nav>
            <div className={styles.headerContainer}>
                <h1 className={styles.codewarsHeader}>SOME LOGO</h1>
            </div>
            <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <NavLink
                    to={"/"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }
                >{lang === "ru" ? "Главная" : "Home"}</NavLink>
                <NavLink
                    to={"/about"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>{lang === "ru" ? "О нас" : "About us"}
                </NavLink>
                <NavLink
                    to={"/posts/1"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>{lang === "ru" ? "Посты" : "Posts"}
                </NavLink>
                <NavLink
                    to={"/valuedisplay"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>{lang === "ru" ? "Отображение значений" : "Value Display"}
                </NavLink>

            </div>
            <div className={styles.ProfileAndSwitchLangContainer}>
                <NavLink
                    to={"/profile/applications/1"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }
                >{lang === "ru" ? "Профиль" : "Profile"}</NavLink>
                <SwitchLangBtn/>
            </div>

        </nav>
    )
}