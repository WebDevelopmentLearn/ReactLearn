import {combineReducers} from "@reduxjs/toolkit";

const usersInitialState = {
    originalUsers: [
        "Alex", "John", "Jane", "Doe", "Smith", "Marry", "Tom", "Jerry", "Harry", "Ron",
        "Hermione", "Ginny", "Luna", "Neville", "Fred", "George", "Percy",
    ],
    filteredUsers: []
}


const userReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case "SEARCH_USER":
            const filtered = state.originalUsers.filter(user => user.includes(action.payload));
            return {
                ...state,
                filteredUsers: filtered
            };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    users: userReducer
});

