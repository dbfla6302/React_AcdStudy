import React, { useRef, useState } from 'react';

const Test2 = () => {
    // 번호 유지
    // const no = useRef(초기값)
    const no = useRef(1)

    const [ data , setData ] = useState([])
    const names = '홍길동,유재석,김고은,김태리,송혜교,전지현,최우식,김건우,김영희,김철수,강호동'.split(",")

    const onAdd = () => {
        const ran = Math.floor( Math.random() * names.length )
        setData([
            ...data,
            {
                id: no.current++ , 
                text : names[ ran ]
            }
        ])
    }
    const onDel = () => {
        setData( data.filter( item => item.id !== 2 ) )
    }

    return (
        <div>
            <p>
                <button onClick={onAdd}>이름출력</button>
                <button onClick={onDel}>이름삭제</button>
            </p>
            <ul>
                {
                    data.map( item => <li key={item.id}> {item.id} / {item.text} </li> )
                }
            </ul>
        </div>
    );
};

export default Test2;