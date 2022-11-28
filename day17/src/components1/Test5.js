import React, { useCallback, useState } from 'react';

const Test5 = () => {
    const [ count , setCount ] = useState(1)

    // 90% 정도 사용
    const onUp = useCallback(() => {
        setCount( count + 1 )
    },[ count ])

    const onDown = useCallback(() => {
        setCount( count - 1 )
    },[ count ])
    
    return (
        <div>
            <h2> useCallback - 함수 </h2>
            <h2> 카운트 : { count }</h2>
            <button onClick={ onUp }>증가</button>
            <button onClick={ onDown }>감소</button>
        </div>
    );
};

export default Test5;