import {configureStore} from "@reduxjs/toolkit";
import auth from "./authSlice";
import {checkTokenExp} from "../middlewares/checkTokenExp";

export const store = configureStore({
    reducer: {
        auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkTokenExp)
});