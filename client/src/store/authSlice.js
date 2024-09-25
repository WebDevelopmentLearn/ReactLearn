import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "./actionCreators";

const initialState = {
    user: null,
    token: null,
    status: "IDLE",
    error: null
}


const setError = (state, action) => {
    state.status = "FAILED";
    state.error = action.payload;
}

const setLoading = (state) => {
    state.status = "LOADING";
    state.error = null;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, setLoading)
            .addCase(register.fulfilled, (state, action) => {
                state.status = "SUCCESS";
                state.error = null;
            })
            .addCase(register.rejected, setError)

            .addCase(login.pending, setLoading)
            .addCase(login.fulfilled, (state, action) => {
                state.status = "SUCCESS";
                state.error = null;
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, setError);

    }
});

export default authSlice.reducer;

export const {logout} = authSlice.actions;