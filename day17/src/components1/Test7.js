import React, { useCallback, useState } from 'react';
import Test7Count from './Test7Count';
import Test7Title from './Test7Title';

const Test7 = () => {
    const [ age , setAge ] = useState(20)
    const [ money , setMoney ] = useState(500000)
    const [ now , setNow ] = useState(10)

    const onAge = useCallback( () => {
        setAge( age + 1 )
    },[ age ])

    const onMoney = useCallback( () => {
        setMoney( money + 10000 )
    },[ money ])

    const onNow = useCallback( () => {
        setNow( now + 1 )
    },[ now ])

    return (
        <div>
            <Test7Title />
            <Test7Count text="나이증가" count={age} />
            <button onClick={onAge}>나이증가</button>
            <Test7Count text="급여증가" count={money} />
            <button onClick={onMoney}>급여증가</button>
            <Test7Count text="연도증가" count={now} />
            <button onClick={onNow}>연도증가</button>
        </div>
    );
};

export default Test7;