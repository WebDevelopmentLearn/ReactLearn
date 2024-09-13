import {useSelector} from "react-redux";

export const Result = () => {
    const {points} = useSelector((state) => state.questionnaireReducer);
    return (
        <div>
            <h2>Your Score: {points}</h2>
        </div>
    )
}