import React, { useState } from 'react';
import { useAxios } from '../hooks/useAxios';

const Test2 = () => {
    const [ text , setText ] = useState('todos')
    const { data  , error  , loading } = useAxios(`https://jsonplaceholder.typicode.com/${text}`)

    const txtList = ['todos','posts','photos','albums']

    const onShow = (txt) => {
        setText(txt)
    }

    return (
        <div>
            <h1> '{text}' data List </h1>
            <p>
                {
                    txtList.map( item => <button key={item} onClick={ () => onShow(item) }>{item}</button> )
                }
                {/* <button onClick={ () => onShow('todos') }>todos</button>
                <button onClick={ () => onShow('posts') }>posts</button>
                <button onClick={ () => onShow('photos') }>photos</button>
                <button onClick={ () => onShow('albums') }>albums</button> */}
            </p>
            <ul>
                {
                    data && loading && data.map( item => <li key={item.id}>{item.id} / {item.title}</li> )
                }
            </ul>
        </div>
    );
};

export default Test2;