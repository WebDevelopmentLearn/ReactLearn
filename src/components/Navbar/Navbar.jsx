import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {SwitchLangBtn} from "./SwitchLangBtn/SwitchLangBtn";

export function Navbar() {
    return (
        <nav>
            <div className={styles.headerContainer}>
                {/*<img src="assets/codewars-logo.svg" alt="codewars_logo"/>*/}
                <h1 className={styles.codewarsHeader}>SOME LOGO</h1>
            </div>
            <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                {/*<a className={styles.githubSourceBtn} href="https://github.com/WebDevelopmentLearn/CodeWarsAPI"*/}
                {/*   target="_blank"*/}
                {/*   rel="noreferrer"*/}
                {/*>*/}
                {/*    <img className={styles.githubLogo} src="assets/github_logo_dark.svg" alt="github_logo"/>*/}
                {/*    <span className={styles.githubSpan}>GitHub</span>*/}
                {/*</a>*/}
                {/*<SwitchLangBtn/>*/}
                <NavLink
                    to={"/"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }
                >Home</NavLink>
                <NavLink
                    to={"/about"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>About
                </NavLink>
                <NavLink
                    to={"/posts/1"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }>Posts
                </NavLink>

            </div>
            <div className={styles.ProfileAndSwitchLangContainer}>
                <NavLink
                    to={"/profile/applications/1"}
                    className={({isActive}) =>
                        isActive ? styles.active : styles.navLink
                    }
                >Profile</NavLink>
                <SwitchLangBtn/>
            </div>

        </nav>
    )
}