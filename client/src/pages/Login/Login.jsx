import {FormComponent, Navbar} from "../../components";
import styles from "./Login.module.scss";
import {useLocation, useParams} from "react-router-dom";

export const Login = () => {
    const message = useLocation().state;
    console.log(message);
    return (
        <div>
            <Navbar />
            <div className={styles.LoginContainer}>
                <h1>Login</h1>
                {message && <p>{message}</p>}
                <FormComponent page="login"/>

            </div>
        </div>
    )
}