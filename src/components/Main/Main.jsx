import UserProfileContainer from "./UserProfileContainer/UserProfileContainer";
import styles from "./Main.module.css";
import AboutContainer from "./AboutContainer/AboutContainer";

function Main() {
    return (
        <div className={styles.Main}>
            <AboutContainer />
            <UserProfileContainer />
        </div>
    )
}

export default Main;