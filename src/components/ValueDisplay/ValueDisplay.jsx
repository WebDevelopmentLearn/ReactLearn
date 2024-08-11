import {useState} from "react";
import {ValueInput} from "./ValueInput/ValueInput";
import {Navbar} from "../Navbar/Navbar";
import styles from "./ValueDisplay.module.css";

export function ValueDisplay() {
    const [value, setValue] = useState("Default");
    function handleChange(e) {
        // console.log(e.target.value);
        setValue(e.target.value);
    }

    console.log("ValueDisplay rendered");
    return (
        <div>
            <Navbar />
            <div className={styles.ValueDisplayContainer}>
                <h1>Current and previous value</h1>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <ValueInput value={value}/>
            </div>
        </div>
    )
}