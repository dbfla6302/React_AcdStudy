import { createSlice } from '@reduxjs/toolkit';

export const counterSlice= createSlice({
    name:'counterbox' ,
    initialState:{
            number:1,
            color:'tomato',
            colors:['#336699','green','pink','skyblue','hotpink','lime']
    },
    reducers: {
        increment: state => {
            state.number += 1
        },
        decrement: state => {
            state.number -= 1
        },
        changeColor : ( state ,action) => {
            state.color  = action.payload
        }        
    }
})

export const { increment,decrement,changeColor } = counterSlice.actions;
export default counterSlice.reducer