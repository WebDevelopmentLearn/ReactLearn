import UserProfile from "./UserProfile/UserProfile";
import styles from "./UserProfileContainer.module.css";
function UserProfileContainer() {
    return (
        <div className={styles.UserProfileContainer}>
            <UserProfile />
        </div>
    )
}

export default UserProfileContainer;