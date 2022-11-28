import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [ count , setCount ] = useState(0)

    //화면에 그려진 후 한번한 실행 
    useEffect( () => {
        //시간 처리 
        const timer = setInterval( () => {
            console.log( 'setInterval')
            // setCount( count + 1 )
            // setCount( 매개변수 => 매개변수 + 1 ) : 함수
            setCount( state => state + 1 )
            //뒷정리 
            return() => {
                clearInterval( timer )
            }
        }, 1000)
    }, [] )

    return (
        <div>
            <h1> 카운트 : { count } </h1>
            <p> 1초마다 1씩 증가하기 </p>
        </div>
    );
};

export default Test4;