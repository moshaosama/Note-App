import { configureStore } from "@reduxjs/toolkit";

import noteReducer from './reducers/noteSlice'

export const Store = configureStore({
    reducer:{
        Note:noteReducer
    }
})