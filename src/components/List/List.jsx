
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
        <ul>
            {peoples.map((people, index) => (
                <li key={index}>
                    <div>
                        <h3>{people.name}</h3>
                        <p>Age: {people.age}</p>
                        <button onClick={() => {removeUser(index)}}>Удалить пользователя</button>
                    </div>
                </li>
            ))}

        </ul>
    )
}

export default List;