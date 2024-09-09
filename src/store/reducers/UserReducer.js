import {createAction, createReducer, createSelector} from "@reduxjs/toolkit";

const initialState = ["Alice", "Bob", "Charlie", "David"];

export const deleteUser = createAction("DELETE_USER");
export const addUser = createAction("ADD_USER");

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(deleteUser,
        (state, action) => state.filter((user) => user !== action.payload));
    builder.addCase(addUser,
        (state, action) => [...state, action.payload]);
});

const users = (state) => state.users;

export const selectUsers = createSelector([users], (users) => users);


