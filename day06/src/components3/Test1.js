import React, { useState } from 'react';

const Test1 = () => {
    const [ data , setData ] = useState([])
    // {id:1 , text:'xxx'}

    const onAdd = () => {
        const ran = Math.floor( Math.random() * 10 )
        setData([
            ...data,
            {
                id: data.length , 
                text : '김고은' + ran
            }
        ])
    }
    const onDel = () => {
        setData( data.filter( item => item.id !== 3 ) )
    }
    return (
        <div style={{margin:30}}>
            <p>
                <button onClick={onAdd}>이름추가</button>
                <button onClick={onDel}>이름삭제</button>
            </p>
            <hr />
            <ul>
                {
                    data.map( item => <li key={item.id}> {item.id} / {item.text} </li> )
                }
            </ul>
        </div>
    );
};

export default Test1;