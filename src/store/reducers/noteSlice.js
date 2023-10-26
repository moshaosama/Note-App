import { createSlice } from "@reduxjs/toolkit";
const noteSlice = createSlice({
    name:"noteSlice",
    initialState:[],

    reducers:{ 
        addNote: (state, action) => {
            state.push(action.payload)
        }, 
        deleteNote :(state ,action) => {
            return (
                state.filter((el) => el.id !== action.payload)
            )
        }
    },
})

export default noteSlice.reducer;

export const {addNote ,deleteNote} = noteSlice.actions;