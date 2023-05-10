import { createSlice, createStore } from "@reduxjs/toolkit";


const ahmedSlice = createSlice({
    name: "test",
    initialState: { name: "ahmed" },
    reducers: {
       

    }
})

const mystore = createStore(ahmedSlice.reducer)

export const myactions = ahmedSlice.actions

export default mystore

