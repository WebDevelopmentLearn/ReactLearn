
import styles from "./Question.module.scss";

export const Question = ({question, selectedAnswer, isCorrect}) => {
    return (
        <div className={styles.QuestionContainer}>
            {/*<h2>{question.title}</h2>*/}
            {/*<input type="radio" id={question.variant1.text} name={question.id} value={question.variant1.text}/>*/}
            {/*<label htmlFor={question.variant1.text}>{question.variant1.text}</label><br/>*/}

            {/*<input type="radio" id={question.variant2.text} name={question.id} value={question.variant2.text}/>*/}
            {/*<label htmlFor={question.variant2.text}>{question.variant2.text}</label><br/>*/}

            <h2>{question.title}</h2>
            <input type="radio" id={`${question.id}-1`} name={`question-${question.id}`} value={1}/>
            <label htmlFor={`${question.id}-1`}>{question.variant1}</label><br/>

            <input type="radio" id={`${question.id}-2`} name={`question-${question.id}`} value={2}/>
            <label htmlFor={`${question.id}-2`}>{question.variant2}</label><br/>

        </div>
    )
}