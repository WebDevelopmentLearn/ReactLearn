import {useEffect, useState} from "react";

function ListItems() {
    const [inputValue, changeInputValue] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(`Компонент обновлен. Текущий список: ${items}`);
    }, [items]);

    useEffect(() => {
        console.log("Компонент создан");
    }, []);

    function addItem(event) {
        event.preventDefault();
        if (inputValue !== "") {
            setItems([...items, inputValue]);
            changeInput('');
        }

    }

    function changeInput(value) {
        changeInputValue(value);
    }


    return (
        <div>
            <form action="">
                <input type="text" value={inputValue} onChange={(event) => changeInput(event.target.value)}/>
                <button onClick={(event) => addItem(event)}>Add</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListItems;