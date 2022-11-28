import { createSlice } from '@reduxjs/toolkit';

let no = 0;
export const todoSlice= createSlice({
    name:'todo' ,
    initialState:{
            text:'아무개',
            data:[
                {id:1, text:'금요일입니다.', isChk:false },
                {id:2, text:'토요일입니다.', isChk:false },
                {id:3, text:'일요일입니다.', isChk:true },
                {id:4, text:'월요일입니다.', isChk:false },
            ]
    },
    reducers: {
        onDel: (state, action) => {     
            state.data = state.data.filter( item => item.id !== action.payload )       
        },
        onAdd: (state, action) => {  
            no = state.data.length + 1             
            state.data = [...state.data ,{id:no++, text:action.payload, isChk:false}]         
        },        
        onToggle: (state, action) => {  
             const id  = action.payload
             state.data = state.data.map(todo => todo.id === id ? {...todo, isChk: !todo.isChk }: todo )      
        },        
        changeInput: (state, action) => { 
            state.text = action.payload             
        },        
    }
})

export const { onDel,onAdd,onToggle,changeInput } = todoSlice.actions;
export default todoSlice.reducer