import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [ count , setCount ] = useState(0)
    const [ isActive , setIsActive ] = useState(false)

    const onToggle = () => {
        setIsActive( !isActive )
    }

    const onReset = () => {
        setIsActive(false)
        setCount(0)
    }

    useEffect( () => {
        let timer = null
        if( isActive ){
            timer = setInterval(() => {
                setCount( count => count + 1 )
            }, 1000);
        }else if( !isActive ){
            clearInterval( timer )
        }
        return() => {
            clearInterval( timer )
        }
    } ,[ isActive ])

    return (
        <div style={{margin:30}}>
            <h1> 카운트 : {count} </h1>
            <p>
                <button onClick={ onToggle }>
                    { isActive ? "중지" : "시작" }
                </button>&nbsp;&nbsp;&nbsp;
                <button onClick={ onReset }>초기화 중지</button>
            </p>
        </div>
    );
};

export default Test6;