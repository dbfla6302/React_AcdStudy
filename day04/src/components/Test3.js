import React, { useState } from 'react';

const Test3 = () => {
    const [ bgcolor , setBgcolor ] = useState('tomato')
    const onColor = () => {
        //setBgcolor(값, 수식)
        // setBgcolor('skyblue')
        setBgcolor( bgcolor === 'tomato' ? 'olivedrab':'tomato' )
    }

    return (
        <div>
            <h3>div 클릭 시 배경색을 hotpink - olivedrab 토글기능(두가지 기능 처리한다)</h3>
            <div style={{border: '1px solid #000',padding: 30, margin:20,fontSize:20, cursor:'pointer',backgroundColor:bgcolor ,color:'#fff'}} onClick={onColor}>
                backgroundColor : {bgcolor}
            </div>
        </div>
    );
};

export default Test3;