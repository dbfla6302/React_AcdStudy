import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [ count , setCount ] = useState(0)
    const [ step , setStep ] = useState(5)

    useEffect( () => {
        let timer = null
        timer = setInterval( () => {
            setCount( prev => prev + step )
            // setCount( 이전값 => 이전값 + 간격 )
        }, 1000)
        return() => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    }, [ step ])

    const changeInput = (e) => {
        const { value } = e.target
        setStep( Number(value) )
    }

    return (
        <div style={{margin:30}}>
            <input type="text" value={ step } onChange={ changeInput } />
            {/* <input type="text" value={ step } onChange={ e => setStep( e.target.value ) } /> */}
            <p> 값 입력 단위 만큼 더하기 </p>
            <h1> 숫자 증가 : {count} </h1>
        </div>
    );
};

export default Test5;