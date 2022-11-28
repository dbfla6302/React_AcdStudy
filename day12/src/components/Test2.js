import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [ text, setText] = useState('')
    const textRef = useRef() 

    const changeInput = e => {
        const { value } = e.target 
        setText( value )
    }
    
    //화면에 그려진후 한번만 실행 
    useEffect( () => {
        textRef.current.focus();
        console.log('useEffect')
    },[])

    return (
        <div>
            <input type="text" value={ text } onChange={ changeInput } ref={ textRef } />
        </div>
    );
};

export default Test2;