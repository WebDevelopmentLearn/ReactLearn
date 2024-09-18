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

                <NavLink
                    to={"/register"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>{lang === "ru" ? "Регистрация" : "Register"}
                </NavLink>

                <NavLink
                    to={"/login"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>{lang === "ru" ? "Вход" : "Log In"}
                </NavLink>

                <NavLink
                    to={"/profile"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>{lang === "ru" ? "Профиль" : "Profile"}
                </NavLink>



                {/*<ul*/}
                {/*    className={`${styles.dropdown} ${isActive ? styles.active : ''} `}*/}
                {/*    onClick={handleClick}>*/}
                {/*    <button className={styles.dropbtn}>Другое*/}
                {/*        <i className="fa fa-caret-down"></i>*/}
                {/*    </button>*/}
                {/*    <div className={styles.dropdown_content}>*/}
                {/*        <NavLink*/}
                {/*            to={"/register"}*/}
                {/*            className={({isActive}) =>*/}
                {/*                isActive ? styles.active : styles.navLink*/}
                {/*            }>{lang === "ru" ? "Регистрация" : "Register"}*/}
                {/*        </NavLink>*/}

                {/*    </div>*/}

                {/*</ul>*/}

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