import {getRandomQuote} from "./actionCreators";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    quote: {
        id: 0,
        quote: "Null Pointer Exception",
        author: "Null"
    },
    isLoading : false,
    error: null
}

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getRandomQuote.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getRandomQuote.fulfilled, (state, action) => {
            state.isLoading = false;
            state.quote = action.payload;
        });
        builder.addCase(getRandomQuote.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export default quoteSlice.reducer;