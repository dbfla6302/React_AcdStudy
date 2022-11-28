// 1. 액션만들기
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

// 2. 액션내보내기
export const changeColor = ( color ) => ({type:CHANGE_COLOR, color})

// 3. 초기값
const initialState = { color:'skyblue'}

// 4. 리듀서 순수함수
const reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case CHANGE_COLOR:
            return{
                color: action.color
            }
        default:
            return state
    }
}

export default reducer