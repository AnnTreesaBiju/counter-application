import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
// to create store:-configureStore()
export const store = configureStore({
    reducer:{
        // define different reducer as key-value pair
        counterReducer
    }
})