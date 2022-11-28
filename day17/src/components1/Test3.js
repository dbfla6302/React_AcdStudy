import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [ color , setColor ] = useState('')
    const [ food , setFood ] = useState('')

    const onColor = (e) => {
        const { value } = e.target
        setColor( value )
    }

    const onFood = (e) => {
        const { value } = e.target
        setFood( value )
    }

    return (
        <div style={{margin:30}}>
            <div>
                <h2>좋아하는 색:</h2>
                <input type="text" value={color} onChange={onColor} />
                <p>예) pink,hotpink,tomaoto,lime,skyblue</p>
            </div>
            <div>
                <h2>종하는 음식은?</h2>
                <p>
                    <input type="radio" id='radio1' name='food' value="갈비" onChange={onFood} />
                    <label htmlFor="radio1">갈비</label>
                </p>
                <p>
                    <input type="radio" id='radio2' name='food' value="라면" onChange={onFood} />
                    <label htmlFor="radio2">라면</label>
                </p>
                <p>
                    <input type="radio" id='radio3' name='food' value="우동" onChange={onFood} />
                    <label htmlFor="radio3">우동</label>
                </p>
                <p>
                    <input type="radio" id='radio4' name='food' value="만두" onChange={onFood} />
                    <label htmlFor="radio4">만두</label>
                </p>
            </div>

            <Test3Sub color={color} food={food} />
        </div>
    );
};

export default Test3;