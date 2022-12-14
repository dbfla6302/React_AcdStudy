import React, { createContext, useState } from 'react';
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

    return (
        <CountContext.Provider value={{count, increment, decrement}}>
            { props.children }
        </CountContext.Provider>
    );
};

export default CountProvider;