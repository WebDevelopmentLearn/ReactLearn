import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./reducers/UserReducer";
import questionnaireReducer from "./reducers/questionnaireSlice";

const mainReducer = combineReducers({
    users: userReducer,
    questionnaireReducer
});

export const appStore = configureStore({
    reducer: mainReducer
})