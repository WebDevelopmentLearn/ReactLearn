import UserProfileContainer from "./UserProfileContainer/UserProfileContainer";
import styles from "./Main.module.scss";
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