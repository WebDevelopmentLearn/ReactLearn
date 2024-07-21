import styles from "./SignIn.module.css";

function SignIn() {
    return (
        <div className={styles.SignInContainer}>
            <a className={styles.SignIn} href="#">Sign in with</a>
        </div>
    )
}

export default SignIn;