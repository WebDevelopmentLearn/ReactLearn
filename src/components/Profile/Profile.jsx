import {useNavigate, useParams} from "react-router-dom";
import styles from "./Profile.module.scss";
import {Navbar} from "../Navbar/Navbar";
import {useContext} from "react";
import LangContext from "../../context/LangContext";
export function Profile() {
    const {lang} = useContext(LangContext);
    const {module, userId} = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className={styles.ProfileContainer}>
                <h1>Profile page</h1>
                <p>User ID: {userId}</p>
                <p>Module: {module}</p>
                <button className={styles.btn}
                        onClick={() => navigate("/")}>{lang === "ru" ? "Вернуться на главную" : "Back to Home page"}</button>

            </div>
        </div>
    )
}