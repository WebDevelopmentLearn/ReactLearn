import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./reducers/UserReducer";
import questionnaireReducer from "./reducers/questionnaireSlice";
import quoteReducer from "./reducers/quoteSlice";

const mainReducer = combineReducers({
    users: userReducer,
    questionnaireReducer,
    quoteReducer,
});

export const appStore = configureStore({
    reducer: mainReducer
})