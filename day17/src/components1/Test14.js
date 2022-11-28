import React from 'react';
import { useAxios } from '../hooks/useAxios';

const Test14 = () => {
    const { data , loading , error } = useAxios('https://jsonplaceholder.typicode.com/posts')
    return (
        <div>
            {
                data.map( item => <p key={item.id}>{item.id} / {item.title}</p> )
            }
        </div>
    );
};

export default Test14;