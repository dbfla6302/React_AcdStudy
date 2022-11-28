import React, { useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    const [ isShow , setIsShow ] = useState(false)
    const [ msg , setMsg ] = useState('메세지 출력')

    const onShow1 = ()  => {
        const result = window.confirm('데이터를 전부 삭제하시겠습니다.')
        if( result ) {
            setMsg('예 전부 삭제합니다.');
            setIsShow( true )
        }else{
            return 
        }
    }
    const onShow2 = ()  => {
        const result = window.confirm('데이터를 전부 복구하시겠습니다.')
        if( result ) {
            setMsg('예 전부 복구합니다.');
            setIsShow( true )
        }else{
            return 
        }
    }

    return (
        <div>
            <p>
                <button onClick={ onShow1 }>메세지1</button>
                <button onClick={ onShow2 }>메세지2</button>
            </p>
            <Test8Sub  isShow={ isShow } setIsShow={setIsShow} msg={msg} />
        </div>
    );
};

export default Test8;