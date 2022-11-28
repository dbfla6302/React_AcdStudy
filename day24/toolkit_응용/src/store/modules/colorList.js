import { createSlice } from '@reduxjs/toolkit';

let no = 0
export const colorListSlice= createSlice({
    name:'colorListbox' ,
    initialState:{
        input :'' , list:[]
        //list : [{id:1,color:'green',opacity:1 }....]
    },
    reducers: {
        insert : ( state ,action) => {
            state.list = state.list.concat({
                id: no++ ,
                color: action.payload , 
                opacity : 1
            })
        },
        update : ( state ,action) => {
            state.list = state.list.map ( item => item.id === action.payload ? { ...item , opacity: item.opacity - 0.1 } : item)
        },         
        remove : ( state ,action) => {
            state.list = state.list.filter ( item => item.id !== action.payload)
        } ,
        changeInput : ( state ,action) => {
            state.input  =  action.payload 
        } 
    }
})

export const { insert, update,remove, changeInput } = colorListSlice.actions;
export default colorListSlice.reducer