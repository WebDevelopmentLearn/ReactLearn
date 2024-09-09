import styles from "./UsersList.module.scss";

import {Navbar} from "../Navbar/Navbar";
import {useCallback, useContext, useState} from "react";
import LangContext from "../../context/LangContext";
import {FilterUsers} from "./FilterUsers/FilterUsers";
import {useDispatch, useSelector} from "react-redux";
import {addUser, deleteUser, selectUsers} from "../../store/reducers/UserReducer";





export function UsersList() {
    const {lang} = useContext(LangContext);

    // const users = useSelector((state) => state.users);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(e.target[0].value));
        console.log(e.target[0].value);
        console.log(users);
    };

    return (
        <div>
            <Navbar/>
            <div className={styles.UsersListContainer}>
                <h1 style={{color: "#8a61ea"}}>{lang === "ru" ? "Список пользователей" : "Users List"}</h1>

                <form onSubmit={handleSubmit} action="">
                    <input className={styles.addUserInput} type="text"/>
                    <button className={styles.btn} type="submit">Add user</button>
                </form>
                <ul style={{listStyle: "none"}}>

                    {users?.map((user, index) => (
                        <li key={index}>
                            <div className={styles.userContainer}>
                                <p>{user}</p>
                                <button className={styles.btnDelete} onClick={() => dispatch(deleteUser(user))}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}