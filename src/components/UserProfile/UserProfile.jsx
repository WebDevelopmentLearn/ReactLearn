
import styles from "./UserProfile.module.scss"
import {Navbar} from "../Navbar/Navbar";
import {useContext, useEffect, useState} from "react";
import langContext from "../../context/LangContext";
import {useDispatch, useSelector} from "react-redux";
import {setUserInfo} from "../../store/Actions";

const defaultUserInfo = {
    name: "",
    status: ""
}
export function UserProfile() {

    const {lang} = useContext(langContext);

    const [userInfo, setUser] = useState(defaultUserInfo);

    const userName = useSelector((state) => state.userInfo.name);
    const userStatus = useSelector((state) => state.userInfo.status);


    const dispatch = useDispatch();
    function submitForm(event) {
        event.preventDefault();
        if (event.target[0].value !== "" && event.target[1].value !== "") {
            dispatch(setUserInfo({
                name: event.target[0].value,
                status: event.target[1].value
            }))
        }
    }

    useEffect(() => {
        setUser({
            name: userName,
            status: userStatus
        })
    }, [userName, userStatus]);

    return (
        <div>
            <Navbar/>
            <div className={styles.UserProfileContainer}>
                <h1 style={{fontSize: "32px"}}>{lang === "ru" ? "Профиль пользователя" : "User Profile"}</h1>
                <div className={styles.UserInformationContainer}>
                    <h2>{lang === "ru" ? "Информация о пользователе" : "User Information"}</h2>
                    <p>{lang === "ru" ? "Имя" : "Name"}: {userInfo.name}</p>
                    <p>{lang === "ru" ? "Статус" : "Status"}: {userInfo.status}</p>
                </div>
                <form className={styles.UserProfileForm} onSubmit={submitForm} action="">
                    <label htmlFor="nameInput">
                        <span>{lang === "ru" ? "Имя" : "Name"}: </span>
                        <input  id="nameInput" type="text"/>
                    </label>
                    <label htmlFor="statusInput">
                        <span>{lang === "ru" ? "Статус" : "Status"}: </span>
                        <input  id="statusInput" type="text"/>
                    </label>
                    <button className={styles.btn} type="submit">{lang === "ru" ? "Сохранить" : "Save"}</button>
                </form>
            </div>
        </div>
    )
}