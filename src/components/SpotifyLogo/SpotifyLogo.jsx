import styles from "./SpotifyLogo.module.css";

function SpotifyLogo() {
    return (
        <div className={styles.SpotifyLogoContainer}>
            <img src="assets/spotify_logo.svg"/>
        </div>
    )
}

export default SpotifyLogo;