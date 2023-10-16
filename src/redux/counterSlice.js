// to compain both action and reducer 
//  createSlice()
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    // action defined in :-reducers and its a key
    // action
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
// to components
export const { increment, decrement, reset} = counterSlice.actions
// default is reducer
// to store
export default counterSlice.reducer
