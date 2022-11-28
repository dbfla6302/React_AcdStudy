/* 액션 생성하기
const 상수형 = '리듀서파일명/액션명' : 액션명 - 한글, 영소문자, 대문자 가능, 
앞에 리듀서 파일명을 쓰는 이유는 액션명이 겹칠수 있기때문에 구별하기 위해서 */
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const PINK = 'color/PINK'

// 액션내보내기 - dispatch({type: AAA, 값})
export const red = () => ({type:RED})
export const green = () => ({type:GREEN})
export const blue = () => ({type:BLUE})
export const pink = () => ({type:PINK})

// 리듀서 함수
const intialState = { color:'hotpink' }
const reducer = ( state = intialState, action ) => {
    switch( action.type ){
        case RED:
            return{
                color: 'red'
            }
        case GREEN:
            return{
                color: 'green'
            }
        case BLUE:
            return{
                color: 'blue'
            }
        case PINK:
            return{
                color: 'pink'
            }
        default :
            return state
    }
}
export default reducer