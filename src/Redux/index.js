import { createSlice, createStore } from "@reduxjs/toolkit";


const ahmedSlice = createSlice({
    name: "test",
    initialState: { name: "ahmed" },
    reducers: {
        jok: (state, action) => {
          return {...state , name :"omer"}
        },

        hok: (state, action) => {
           return state
        },

        tok: (state, action) => {
            console.log("tok")
        },

    }
})

const mystore = createStore(ahmedSlice.reducer)

export const myactions = ahmedSlice.actions

export default mystore

