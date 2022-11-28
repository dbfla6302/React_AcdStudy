import React, { useReducer } from 'react';

const initialState = 'orange'
const reducer = (state, action) => {
    switch (action.type) {
        case 'PINK':
            return 'pink'
        case 'RED':
            return 'red'
        case 'GREEN':
            return 'green'
        case 'BLUE':
            return 'blue'
        default:
            return state
    }
}

const Test9 = () => {
    const [ color, dispatch ] = useReducer(reducer , initialState )
    return (
        <div>
            <h2 style={{color:color}}>컬러 : { color }</h2>
            <p>
                <button onClick={ () => dispatch({type:'PINK'})}>pink</button>
                <button onClick={ () => dispatch({type:'RED'})}>red</button>
                <button onClick={ () => dispatch({type:'GREEN'})}>green</button>
                <button onClick={ () => dispatch({type:'BLUE'})}>bule</button>
            </p>
        </div>
    );
};

export default Test9;