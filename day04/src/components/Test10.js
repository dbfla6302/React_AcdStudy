import React, { useRef } from 'react';

const Test10 = () => {
    const ref1 = useRef()
    const onView =  () => {
        const data = {
            color: ref1.current.value
        }
        console.log( data )
    } 

    return (
        <div>
            <select ref={ ref1 }>
                <option value="red">crimson</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
            </select>
            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test10;