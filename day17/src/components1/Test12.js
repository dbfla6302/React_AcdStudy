import React, { useReducer } from 'react';

const initialState = {
    width: 100
}
const reducer = ( state , action) => {
    switch( action.type ){
        case 'PLUS':
            return{
                width: state.width + action.step
            }
        case 'MINUS':
            return{
                width: state.width - action.step
            }
        case 'RESET':
            return{
                width: 100
            }
        default:
         return state
    }
}

const Test12 = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            <div style={{width:state.width, height:100, margin:10, background:'pink', transition:'0.5s'}}></div>
            <p>
                {/* PLUS , MINUS , RESET 너비 */}
                <button onClick={ () => dispatch({type:'PLUS' , step:10})}>10씩 증가</button>
                <button onClick={ () => dispatch({type:'PLUS' , step:50})}>50씩 증가</button>
                <button onClick={ () => dispatch({type:'MINUS' , step:10})}>10씩 감소</button>
                <button onClick={ () => dispatch({type:'MINUS' , step:30})}>30씩 감소</button>
                <button onClick={ () => dispatch({type:'RESET'})}>원래너비</button>
            </p>
        </div>
    );
};

export default Test12;