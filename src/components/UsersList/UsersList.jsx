import styles from "./UsersList.module.scss";
import {useSelector, useDispatch} from "react-redux";
import {searchUser} from "../../store/Actions";
import {Navbar} from "../Navbar/Navbar";
import {useContext} from "react";
import LangContext from "../../context/LangContext";

export function UsersList() {
    const {lang} = useContext(LangContext);
    const dispatch = useDispatch();
    const originalUsers = useSelector((state) => state.users.originalUsers);
    const filteredUsers = useSelector((state) => state.users.filteredUsers);
    const onInput = (event) => {
        const searchValue = event.target.value;
        dispatch(searchUser(searchValue));
    }

    return (
        <div>
            <Navbar/>
            <div className={styles.UsersListContainer}>
                <h1 style={{color: "#8a61ea"}}>{lang === "ru" ? "Список пользователей" : "Users List"}</h1>

                <input type="text" onInput={(e) => onInput(e)}/>
                <ul style={{listStyle: "none"}}>
                    {(filteredUsers.length > 0 ? filteredUsers : originalUsers).map((user, idx) => (
                        <li key={idx}>
                            <div className={styles.userContainer}>
                                <p>{user}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}