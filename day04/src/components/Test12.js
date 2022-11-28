import React, { useState } from 'react';

const Test12 = () => {
    const [ isChk, setIsChk ] = useState( true )

    const changeInput = (e)  => {
        const { checked } = e.target
        setIsChk( checked )
    }
   
    return (
        <div style={{margin:20, fontSize:20, color:isChk ? "red" : "#000" }}>
            <input type="checkbox" checked={isChk} onChange={ changeInput } />
            오늘은 목요일 입니다.
        </div>
    );
};

export default Test12;