// 1. 액션생성하기
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'

// 2. 액션내보내기
export const increment = () => ({type:INCREMENT})
export const decrement = () => ({type:DECREMENT})
export const reset = () => ({type:RESET})

// 3. 초기화
const initialState = { num : 1 }

// 4. 리듀서함수
const reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case INCREMENT:
            return{
                num : state.num + 1
            }
        case DECREMENT:
            return{
                num : state.num - 1
            }
        case RESET:
            return{
                num : 1
            }
        default:
            return state
    }
}
export default reducer