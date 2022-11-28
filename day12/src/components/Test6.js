import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [ count , setCount ] = useState(0)
    const [ isAcitve , setIsAcitve ] = useState( false )

    const onToggle = ()  => {
        setIsAcitve( !isAcitve )
    }
    const onReset = ()  => {
        setIsAcitve( false )
        setCount( 0 )
    }

    useEffect( () => {
        let timer = null 
        if( isAcitve ) {
            timer = setInterval( () => {
                setCount( count => count + 1 )
            },1000 )
        }else if( !isAcitve) {
            clearInterval( timer )
        }
        return() => {
            clearInterval( timer )
        }
    },[isAcitve])

    return (
        <div>
           <h1> 카운트 : {count} </h1>
           <p>
            <button onClick={ onToggle }>
                { isAcitve ? "중지" :"시작" }
            </button> 
            <button onClick={ onReset }>초기화 중지 </button>
           </p>
        </div>
    );
};

export default Test6;