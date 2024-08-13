import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./Reducers";

export const appStore = configureStore({
    reducer: rootReducer
});