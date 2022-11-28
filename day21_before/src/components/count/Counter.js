import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

const Counter = () => {
    const {cnt,onUp,onDown} = useContext(CounterContext)
    return (
        <div>
            <h1>카운터 : {cnt}</h1>
            <p>
                <button onClick={ () => onUp(10) }>10씩증가</button>
                <button onClick={ () => onUp(50) }>50씩증가</button>
                <button onClick={ () => onDown(10) }>10씩감소</button>
                <button onClick={ () => onDown(50) }>50씩감소</button>
            </p>
        </div>
    );
};

export default Counter;