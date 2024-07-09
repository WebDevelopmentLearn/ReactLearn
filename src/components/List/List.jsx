
import styles from "./List.module.css";
import {useState} from "react";


function List() {
    const [peoples, setPeoples] = useState([
        {name: "Tom", age: 16},
        {name: "John", age: 43},
        {name: "Alex", age: 23},
        {name: "Alice", age: 19},
        {name: "Max", age: 45},
        {name: "Jessica", age: 51},
        {name: "Karl", age: 44},
        {name: "Megan", age: 32}
    ]);

    const removeUser = (index) => {
        setPeoples(prevPeoples => prevPeoples.filter((el, id) => id !== index));
    }

    return (
        <div className={styles.ListContainer}>
            <ul className={styles.peopleList}>
                {peoples.map((people, index) => (
                    <li key={index}>
                        <h3>Name: {people.name}</h3>
                        <p>Age: {people.age}</p>
                        <button onClick={() => {
                            removeUser(index)
                        }}>Удалить пользователя
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default List;