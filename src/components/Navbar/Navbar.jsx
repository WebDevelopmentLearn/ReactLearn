import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {SwitchLangBtn} from "./SwitchLangBtn/SwitchLangBtn";
import LangContext from "../../context/LangContext";
import {useContext, useState} from "react";

export function Navbar() {

    const {lang} = useContext(LangContext);
    const [isActive, setIsActive] = useState(false);

    // Функция для обработки клика
    const handleClick = () => {
        setIsActive(!isActive); // Меняем состояние
    };
    return (
        <nav>
            <div className={styles.headerContainer}>
                <h1 className={styles.codewarsHeader}>SOME LOGO</h1>
            </div>
            <div style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
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
                <ul
                    className={`${styles.dropdown} ${isActive ? styles.active : ''} `}
                    onClick={handleClick}>
                    <button className={styles.dropbtn}>Другое
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={styles.dropdown_content}>
                        <NavLink
                            to={"/valuedisplay"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Отображение значений" : "Value Display"}
                        </NavLink>
                        <NavLink
                            to={"/userslist"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Список пользователей" : "Users List"}
                        </NavLink>
                        <NavLink
                            to={"/posts/1"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Посты" : "Posts"}
                        </NavLink>
                        <NavLink
                            to={"/counter"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Счетчик" : "Counter"}
                        </NavLink>
                        <NavLink
                            to={"/timer"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Таймер" : "Timer"}
                        </NavLink>
                        <NavLink
                            to={"/userslist"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Список пользователей" : "Users List"}
                        </NavLink>
                        <NavLink
                            to={"/todolist"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Список дел" : "Todo List"}
                        </NavLink>

                        <NavLink
                            to={"/notes"}
                            className={({isActive}) =>
                                isActive ? styles.active : styles.navLink
                            }>{lang === "ru" ? "Заметки" : "Notes"}
                        </NavLink>
                    </div>

                </ul>

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