import styles from "./MathQuiz.module.css";
import Answer from "../Answer/Answer";
import {useState} from "react";

function MathQuiz() {

    const a = Math.floor(Math.random()*10);
    const b = Math.floor(Math.random()*10);

    const [points, setPoints] = useState(0);

    function updatePoints(value) {
        setPoints(prevPoints => prevPoints + value);
    }

    return (
        <div className={styles.mathQuizContainer}>
            <h1>Ваши очки: {points}</h1>
            <h1>{`${a} + ${b} = ?`}</h1>
            <Answer a={a} b={b} updatePoints={updatePoints} />
        </div>
    );
}

export default MathQuiz;