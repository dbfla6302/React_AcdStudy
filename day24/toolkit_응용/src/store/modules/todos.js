import { createSlice } from '@reduxjs/toolkit';

let no  = 1;
export const todosSlice= createSlice({
    name:'todo' ,
    initialState:{
        text:'아무개',
        todos: []
    },
    reducers: {
        remove: (state,action) => {
         const id = action.payload                  
          state.todos =  state.todos.filter( todo => todo.id !== id )            
        },   
        insert: (state,action) => {            
            state.todos = [...state.todos , {id: no++,  text : action.payload , done :false }]
        },
        toggle: (state, action) => {
            state.todos = state.todos.map( todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo )
        },
        changeInput: (state,action) => {
            state.text = action.payload 
        }
    }
})

export const { remove, insert , toggle, changeInput } =todosSlice.actions;
export default todosSlice.reducer