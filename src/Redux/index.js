import { createSlice, configureStore } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: "theme",
    initialState: { name: "ahmed" },
    reducers: {
        increment: state => console.log(state.name),
        decrement: state => state.name === "- omer",
    }
})
const mystore = configureStore({
    reducer: themeSlice.reducer,
})

export const themeActions = themeSlice.actions

export default mystore

