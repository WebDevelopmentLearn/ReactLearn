import {combineReducers} from "@reduxjs/toolkit";

const userInfoInitialState = {
    name: "",
    status: ""
}

const counterInitialState = {
    counter: 0,
}

const notesInitialState = {
    notes: []
}

const todoInitialState = {
    tasks: []
}

const usersInitialState = {
    originalUsers: [
        "Alex", "John", "Jane", "Doe", "Smith", "Marry", "Tom", "Jerry", "Harry", "Ron",
        "Hermione", "Ginny", "Luna", "Neville", "Fred", "George", "Percy",
    ],
    filteredUsers: [],
    filter: ""
}


const userInfoReducer = (state = userInfoInitialState, action) => {
    switch (action.type) {
        case "SET_USER_INFO":
            return {
                ...state,
                name: action.payload.name,
                status: action.payload.status

            }

        default:
            return state;
    }
}

const todoReducer = (state = todoInitialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            isCompleted: !task.isCompleted
                        }
                    }
                    return task;
                })
            };


        default:
            return state;
    }
}

const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "PLUS":
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case "MINUS":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state;
    }
}


const notesReducer = (state = notesInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case "DELETE_NOTE":
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case "EDIT_NOTE":
            return {
                ...state,
                notes: state.notes.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...action.payload };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
}


const userReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case "SEARCH_USER":
            return {
                ...state,
                filteredUsers: state.originalUsers.filter((user) => user.toLowerCase().includes(action.payload.toLowerCase())),
                filter: action.payload
            };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: todoReducer,
    users: userReducer,
    notes: notesReducer,
    userInfo: userInfoReducer
});

