//액션
const INSERT = 'colorList/INSERT'
const UPDATE = 'colorList/UPDATE'
const REMOVE = 'colorList/REMOVE'
const CHANGE_INPUT = 'colorList/CHANGE_INPUT'

//액션생성
let id = 1
export const insert = (color) => ({type:INSERT, color})
export const update = (id) => ({type:UPDATE, id })
export const remove = (id) => ({type:REMOVE, id })
export const changeInput =(text)  =>  ({type:CHANGE_INPUT, text })

const initialState = {
    input :'' , list:[]
    //list : [{id:1,color:'green',opacity:1 }....]
}

const counter = (state=initialState , action) => {
    switch( action.type ) {
        case INSERT:
            return {
                ...state ,
                list : state.list.concat({
                    id: id++ ,
                    color: action.color , 
                    opacity : 1
                })
            }
        case UPDATE:
            return {
                ...state,
                list: state.list.map ( item => item.id === action.id ? { ...item , opacity: item.opacity - 0.1 } : item)
            }  
            case REMOVE:
                return {
                    ...state,
                    list: state.list.filter ( item => item.id !== action.id)
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

export default counter