import React, { useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import { useCounter } from '../hooks/useCounter';

const Test3 = () => {
    const { state , onUp , onDown } = useCounter(1)
    const { data } = useAxios(`https://jsonplaceholder.typicode.com/posts/${state}`)

    return (
        <div>
            <h1>{ state }</h1>
            <p>
                <button onClick={ () => onUp() }> 증가 </button>
                <button onClick={ () => onDown() }> 감소 </button>
            </p>
            <hr />
            {
                data && <div>
                    <h2> id : {data.id}</h2>
                    <h2> title : {data.title}</h2>
                </div>
            }
        </div>
    );
};

export default Test3;