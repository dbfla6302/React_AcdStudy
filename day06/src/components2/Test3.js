import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const dataList = [
    {id:1 , name:'유재석'},
    {id:2 , name:'김고은'},
    {id:3 , name:'김태리'},
    {id:4 , name:'김다미'},
    {id:5 , name:'송혜교'},
]

const Test3 = () => {
    const [ data, setData ] = useState( dataList )

    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id) )
    }
    const onAdd = ( name ) => {
        setData([ ...data , { id:6 , name } ])
    }
    const onMod = ( id ) => {
        setData( data.map( item => item.id === id ? {...item, name:'김철수'} : item ) )
    }

    return (
        <div>
            <Test3Sub onDel={onDel} onAdd={onAdd} onMod={onMod} />
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.name}</li> )
                }
            </ul>
        </div>
    );
};

export default Test3;