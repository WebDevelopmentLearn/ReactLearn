import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav>
            <div className={styles.headerContainer}>
                <img src="assets/codewars-logo.svg" alt="codewars_logo"/>
                <h1 className={styles.codewarsHeader}>CodeWars API v1</h1>
            </div>
            <a className={styles.githubSourceBtn} href="https://github.com/WebDevelopmentLearn/CodeWarsAPI" target="_blank">
                <img className={styles.githubLogo} src="assets/github_logo_dark.svg" alt="github_logo"/>
                <span className={styles.githubSpan}>GitHub</span>
            </a>

        </nav>
    )
}

export default Navbar;