const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'
const CHANGE_INPUT ='todos/CHANGE_INPUT'

let id = 1
export const insert = (text) => ({type:INSERT, text})
export const remove = (id) => ({type:REMOVE, id })
export const toggle = (id) => ({type:TOGGLE, id })
export const changeInput =(text)  =>  ({type:CHANGE_INPUT, text })

const initialState ={
    input :'',
    list : []
}

const reducer = (state=initialState , action) => {
    switch( action.type ) {
        case INSERT:
            return {
                ...state ,
                list : [...state.list, { id: id++, text:action.text, done:false }]
            }        
        case REMOVE:
            return {
                ...state,
                list: state.list.filter ( item => item.id !== action.id)
            }     
        case TOGGLE:
            return {
                ...state,
                list: state.list.map ( item => item.id === action.id ? { ...item , done: !item.done } : item)
            }     
        case CHANGE_INPUT:
            return {
                ...state,
                input : action.text 
            }     
        default:
        return state         
    }
} 


export default reducer