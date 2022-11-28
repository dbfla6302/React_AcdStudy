import React from 'react';
import { useCount } from "../hooks/useCount";

const Test13 = () => {
    const { state , onUp , onDown , onReset } = useCount(100)
    return (
        <div>
            <h1> 카운트 :  { state }</h1>
            <p>
                <button onClick={ () => onUp() }>증가</button>
                <button onClick={ () => onDown() }>감소</button>
                <button onClick={ () => onReset() }>초기화</button>
            </p>
        </div>
    );
};

export default Test13;