import React, { useMemo, useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    const [ count , setCount ] = useState(1)
    const onUp = () => {
        setCount( count + 1 )
    }

    const fun = useMemo(() => {
        return <Test2Sub count={count} />
    },[count])

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <button onClick={onUp}>증가</button>
            <hr />
            {
                fun
            }
        </div>
    );
};

export default Test2;