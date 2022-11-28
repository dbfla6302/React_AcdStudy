import React, { createContext, useMemo, useState } from 'react';
// 관리자
export const CountContext = createContext()

const CountProvider = ( props ) => {
    const [ count, setCount ] = useState(1)
    const increment = () => {
        setCount( count + 1 )
    }
    const decrement = () => {
        setCount( count - 1 )
    }

    // useMemo( () => ({}), [의존값] )
    const value = useMemo( () => ({count, increment, decrement}) , [count, increment, decrement])

    return (
        <CountContext.Provider value={value}>
            { props.children }
        </CountContext.Provider>
    );
};

export default CountProvider;