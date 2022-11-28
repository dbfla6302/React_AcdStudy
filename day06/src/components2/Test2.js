import React, { useState } from 'react';

const dataList = [
    {id:1 , name:'유재석'},
    {id:2 , name:'김고은'},
    {id:3 , name:'김태리'},
    {id:4 , name:'김다미'},
    {id:5 , name:'송혜교'},
]

const Test2 = () => {
    const [ data, setData ] = useState( dataList )

    const onDel1 = () => {
        setData( data.filter( item => item.name !== '유재석') )
    }
    const onDel2 = () => {
        setData( data.filter( item => item.id !== 3) )
    }
    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id) )
    }

    const onAdd1 = () => {
        setData( data.concat({ id:6, name:'전지현'}) )
    }
    const onAdd2 = () => {
        setData([
            ...data , 
            {
                id: 7,
                name:'최우식'
            }
        ])
    }
    const onAdd = ( name ) => {
        setData([
            ...data , 
            {
                id:8 ,
                name
                // name: name 이렇게 key 값과 변수명이 동일할 땐 하나만 써도 됌.
            }
        ])
    }

    const onMod1 = () => {
        setData( data.map( item => {
            if(item.name === '송혜교'){
                return {
                    ...item ,
                    name : '전지현'
                }
            }else{
                return item
            }
        }) )
    }
    const onMod2 = () => {
        setData( data.map( item => item.id === 1 ? {...item, name:'김영희'} : item ) )
    }
    const onMod = ( id ) => {
        setData( data.map( item => item.id === id ? {...item, name:'우영우'} : item ) )
    }

    return (
        <div>
            <p>
                <button onClick={ onDel1 }> 유재석 삭제 </button>
                <button onClick={ onDel2 }> 3번 삭제 </button>
                <button onClick={ () => onDel(1) }> 1 삭제 </button>
                <button onClick={ () => onDel(2) }> 2 삭제 </button>
                <button onClick={ () => onDel(5) }> 5 삭제 </button>
            </p>
            <p>
                <button onClick={ onAdd1 }> 전지현 추가 </button>
                <button onClick={ onAdd2 }> 최우식 추가 </button>
                <button onClick={ () => onAdd('강호동') }> 강호동 추가 </button>
            </p>
            <p>
                <button onClick={ onMod1 }> 송혜교 → 전지현 수정 </button>
                <button onClick={ onMod2 }> 1번 → 김영희 수정 </button>
                <button onClick={ () => onMod(3) }> 3번 → 우영우 수정 </button>
            </p>
            <ul>
                {
                    data.map( item =>  <li key={item.id}> {item.id} / {item.name} </li> )
                }
            </ul>
        </div>
    );
};

export default Test2;

// 버튼 삭제,추가,수정