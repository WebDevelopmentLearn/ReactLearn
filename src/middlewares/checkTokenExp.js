import {jwtDecode} from "jwt-decode";
import {logout} from "../store/authSlice";

const isTokenValid = (token) => {
    if (!token) {
        return false;
    }
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
}


export const checkTokenExp = (store) => (next) => (action) => {
    console.log("test");
    const result = next(action);
    const token = store.getState().auth.token;
    console.log(token);
    if (token && !isTokenValid(token)) {
        store.dispatch(logout());
    }

    return result;
};

