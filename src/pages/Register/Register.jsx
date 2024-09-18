import {FormComponent, Navbar} from "../../components";
import styles from "./Register.module.scss";

export const Register = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.RegisterContainer}>
                <h1>Registration</h1>
                <FormComponent page="register"/>
            </div>
        </div>
    )
}