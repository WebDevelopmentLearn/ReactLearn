import {useDispatch, useSelector} from "react-redux";
import {Question} from "./Question/Question";
import {Result} from "./Result/Result";
import {useForm} from "react-hook-form";
import {finishQuestionnaire} from "../../store/reducers/questionnaireSlice";
import styles from "./Questionnaire.module.scss";
import {Navbar} from "../Navbar/Navbar";
export const Questionnaire = () => {
    const {questions} = useSelector((state) => state.questionnaireReducer);
    const dispatch = useDispatch();
    
    const submitForm = (event) => {
        event.preventDefault();
        let points = 0;
        questions.forEach((question) => {
            const selectedValue = event.target[`question-${question.id}`].value;
            if (parseInt(selectedValue) === question.rightVariant) {
                points++;
            }
        });
        dispatch(finishQuestionnaire(points));
    }


    return (
        <div>
            <Navbar />
            <div className={styles.QuestionnaireContainer}>
                <h1>Questionnaire</h1>
                <form  action="" onSubmit={submitForm}>
                    {questions.map((question) => (
                        <Question key={question.id} question={question}/>
                    ))}
                    <button className={styles.btn} type="submit">Отправить ответы</button>
                </form>
                <Result/>
            </div>

        </div>
    )
}