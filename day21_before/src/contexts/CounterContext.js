import React, { createContext, useState } from 'react';

export const CounterContext = createContext()

const CounterProvider = ( props ) => {
    const [ cnt , setCnt ] = useState(0)
    const onUp = ( count ) => {
        setCnt( cnt + count )
    }
    const onDown = ( count ) => {
        setCnt( cnt - count )
    }

    return (
        <CounterContext.Provider value={{cnt,onUp,onDown}}>
            { props.children }
        </CounterContext.Provider>
    );
};

export default CounterProvider;