import { createSlice } from '@reduxjs/toolkit';

export const countSlice= createSlice({
    name:'counter' ,
    initialState:{
            num:0
    },
    reducers: {
        increment: state => {
            state.num += 1
        },
        decrement: state => {
            state.num -= 1
        },        
        add: (state, action )=> {
            state.num += action.payload
        },        
        reset: state => {
            state.num  = 0 
        }        
    }
})

export const { increment, decrement, reset, add } = countSlice.actions;
export default countSlice.reducer