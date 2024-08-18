
export const setUserInfo = (userInfo) => ({
    type: "SET_USER_INFO",
    payload: userInfo
})

export const increment = () => ({
    type: "INCREMENT"
});

export const decrement = () => ({
    type: "DECREMENT"
});

export const plus = (num) => ({
    type: "PLUS",
    payload: num
});

export const minus = (num) =>  ({
    type: "MINUS",
    payload: num
});


export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task
});

export const deleteTask = (id) => ({
    type: "DELETE_TASK",
    payload: id
});

export const toggleTask = (id) => ({
    type: "TOGGLE_TASK",
    payload: id
});

export const editTask = (task) => ({
    type: "EDIT_TASK",
    payload: task
});

export const addNote = (note) => ({
    type: "ADD_NOTE",
    payload: note
});

export const deleteNote = (id) => ({
    type: "DELETE_NOTE",
    payload: id
});

export const editNote = (note) => ({
    type: "EDIT_NOTE",
    payload: note
});


export const searchUser = (searchText) => ({
    type: "SEARCH_USER",
    payload: searchText
});