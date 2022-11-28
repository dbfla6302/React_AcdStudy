import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [ isShow , setIsShow ] = useState( false )

    const onShow = ()  => {
        setIsShow( !isShow )
    }

    return (
        <div>
            <button onClick={ onShow }>보이기/숨기기</button>
            <hr />
            {
                isShow &&  <Test3Sub />
            }

        </div>
    );
};

export default Test3;