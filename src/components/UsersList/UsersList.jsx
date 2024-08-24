import styles from "./UsersList.module.scss";

import {Navbar} from "../Navbar/Navbar";
import {useCallback, useContext, useState} from "react";
import LangContext from "../../context/LangContext";
import {FilterUsers} from "./FilterUsers/FilterUsers";
import {useSelector} from "react-redux";

const allUsers =  [
    {id: 0, name: "Alex"},
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Doe"},
    {id: 4, name: "Smith"},
    {id: 5, name: "Marry"},
    {id: 6, name: "Tom"},
    {id: 7, name: "Jerry"},
    {id: 8, name: "Harry"},
    {id: 9, name: "Ron"},
    {id: 10, name: "Hermione"},
    {id: 11, name: "Ginny"},
    {id: 12, name: "Luna"},
    {id: 13, name: "Neville"},
    {id: 14, name: "Fred"},
    {id: 15, name: "George"},
    {id: 16, name: "Percy"}
];


export function UsersList() {
    const {lang} = useContext(LangContext);
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredUsers);
    },[])


    return (
        <div>
            <Navbar/>
            <div className={styles.UsersListContainer}>
                <h1 style={{color: "#8a61ea"}}>{lang === "ru" ? "Список пользователей" : "Users List"}</h1>

                {/*<input type="text" onInput={(e) => onInput(e)}/>*/}
                <FilterUsers onChange={handleSearch}/>
                <ul style={{listStyle: "none"}}>
                    {users?.map((user) => (
                        <li key={user.id}>
                            <div className={styles.userContainer}>
                                <p>{user.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}