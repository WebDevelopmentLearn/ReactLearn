import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getRandomQuote = createAsyncThunk("qod/getRandomQuote", async (id) => {
   try {
       const response = await axios.get(`https://dummyjson.com/quotes/${id}`);
       return response.data;
   } catch (error) {
       throw new Error(error);
   }
});