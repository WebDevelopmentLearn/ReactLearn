import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    questions: [
        {
            id: 1,
            title: "Какой ЯП появился раньше, Java или JavaScript?",
            variant1: "Java",
            variant2: "JavaScript",
            rightVariant: 1
        },
        {
            id: 2,
            title: "Какое из этих событий срабатывает, когда курсор наводится на элемент?",
            variant1: "hover",
            variant2: "blur",
            rightVariant: 1
        },
        {
            id: 3,
            title: "Что возвращает асинхронная функция?",
            variant1: "Массив строк",
            variant2: "Promise",
            rightVariant: 2
        },
        {
            id: 4,
            title: "Что возвращает метод массива push?",
            variant1: "Массив",
            variant2: "Новую длину массива",
            rightVariant: 2
        },
        {
            id: 5,
            title: "Для чего используется деструктуризация?",
            variant1: "Для распаковки массива/объекта и извлечения из него необходимых полей",
            variant2: "Чтобы изменить содержимое массива/объекта",
            rightVariant: 1
        }
    ],
    points: 0
}


const questionnaireSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        finishQuestionnaire: (state, action) => {
            state.points = action.payload;
        }
    }
})

export default questionnaireSlice.reducer;
export const {finishQuestionnaire} = questionnaireSlice.actions;