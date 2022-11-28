import React, { useState } from 'react';

const Test11 = () => {
    const [color, setColor] = useState('orange')
    const [test, setText] = useState('')

    const onView =  () => {
        setColor( test )
    }
    const onColor =  (e) => {
        const { value } = e.target
        setText( value )
    } 

    return (
        <div> 
            <h2 style={{color:color}}>오늘은 금요일 입니다. </h2>
            <select onChange={ onColor }>
                <option value="crimson">crimson</option>
                <option value="lightseagreen">lightseagreen</option>
                <option value="cornflowerblue">cornflowerblue</option>
                <option value="pink">pink</option>
            </select>
            <button onClick={onView}>확인</button> 
        </div>
    );
};

export default Test11;