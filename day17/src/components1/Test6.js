import React, { useCallback, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    const [ cnt1 , setCnt1 ] = useState(10)
    const [ cnt2 , setCnt2 ] = useState(10)
    const [ cnt3 , setCnt3 ] = useState(10)

    const onUp1 = useCallback( () => {
        setCnt1( cnt1 + 1 )
    },[ cnt1 ])
    const onUp2 = useCallback( () => {
        setCnt2( cnt2 + 1 )
    },[ cnt2 ])
    const onUp3 = useCallback( () => {
        setCnt3( cnt3 + 1 )
    },[ cnt3 ])

    return (
        <div>
            <h2> React.memo : 컴포넌트의 return 값을 기억 </h2>
            <h1>카운트1 : { cnt1 }</h1>
            <Test6Sub text="카운트1" count={cnt1}/>
            <button onClick={onUp1}>증가</button>
            <hr />
            <h1>카운트2 : { cnt2 }</h1>
            <Test6Sub text="카운트2" count={cnt2} />
            <button onClick={onUp2}>증가</button>
            <hr />
            <h1>카운트3 : { cnt3 }</h1>
            <Test6Sub text="카운트3" count={cnt3} />
            <button onClick={onUp3}>증가</button>
            <hr />
        </div>
    );
};

export default Test6;