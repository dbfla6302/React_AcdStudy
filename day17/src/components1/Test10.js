import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.step
        case 'DECREMENT':
            return state - action.step
        default:
            return state
    }
}

const Test10 = () => {
    const [ count, dispatch ] = useReducer( reducer , initialState )
    return (
        <div>
            <h2>카운트 : { count }</h2>
            <p>
                <button onClick={ () => dispatch({type:'INCREMENT' , step : 10})}>10씩 증가</button>
                <button onClick={ () => dispatch({type:'INCREMENT' , step : 20})}>20씩 증가</button>

                <button onClick={ () => dispatch({type:'DECREMENT' , step : 5})}>5씩 감소</button>
                <button onClick={ () => dispatch({type:'DECREMENT' , step : 20})}>20씩 감소</button>
            </p>
        </div>
    );
};

export default Test10;