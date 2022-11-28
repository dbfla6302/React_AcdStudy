import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    const [ isShow  , setIsShow ] = useState( false )
    const onShow = () => {
        setIsShow( !isShow )
    }
    return (
        <div>
            <button onClick={ onShow }>
                { isShow ? "숨기기" : "보이기"}
            </button>
            <hr/>
            {
                isShow && <Test7Sub />
            }
        </div>
    );
};

export default Test7;