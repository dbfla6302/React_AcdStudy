const INCRESE  = 'counter/INCRESE'
const DECRESE = 'counter/DECRESE'
const CHANGE_COLOR  = 'counter/CHANGE_COLOR'

export const increse = () => ({type:INCRESE})
export const decrese = () => ({type:DECRESE})
export const changeColor = (color) => ({type:CHANGE_COLOR, color })

const initialState = {
    number :1 , color:'tomato',
    colors: ['#bfcd7e', '#7E57C2', '#EA80FC', '#00BCD4','tomato','skyblue']
}

const counter = (state=initialState , action) => {
    switch( action.type ) {        
        case INCRESE:
            return {
                ...state,
                number: state.number + 1
            }  
            case DECRESE:
                return {
                    ...state,
                    number: state.number - 1
                }     
            case CHANGE_COLOR:
                return {
                    ...state,
                    color: action.color
                }     
         default:
         return state         
    }
} 

export default counter