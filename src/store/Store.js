import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./reducers/UserReducer";

const mainReducer = combineReducers({
    users: userReducer
});

export const appStore = configureStore({
    reducer: mainReducer
})