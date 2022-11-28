import React, { useReducer } from 'react';

const initialState = {
    color : 'orange'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            // 초기값안에 여러개의 선언자 {},[] 등등
            return {
                // ...state
                color: action.step
            }
        default:
            return state
    }
}

const Test11 = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 style={{color:state.color}}>컬러 두단어 _연결 CHANGE_COLOR : { state.color }</h1>
            <p>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR' , step:'hotpink'})}> hotpink </button>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR' , step:'tomato'})}> tomato </button>
                <button onClick={ () => dispatch({type:'CHANGE_COLOR' , step:'skyblue'})}> skyblue </button>
            </p>
        </div>
    );
};

export default Test11;