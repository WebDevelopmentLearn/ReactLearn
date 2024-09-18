import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000/api/auth";
export const register = createAsyncThunk("auth/register", async ({email, password}, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/register`, {email, password});
        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.msg);
    }
});


export const login = createAsyncThunk("auth/login", async ({email, password}, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/login`, {email, password});
        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.msg);
    }
});