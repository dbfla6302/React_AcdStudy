import React, { createContext, useMemo, useState } from 'react';

export const CounterContext = createContext()

const CounterProvider = ( props ) => {
    const [ cnt , setCnt ] = useState(0)
    const onUp = ( count ) => {
        setCnt( cnt + count )
    }
    const onDown = ( count ) => {
        setCnt( cnt - count )
    }

    // useMemo( () => ({}), [의존값] )
    const value = useMemo( () => ({cnt,onUp,onDown}) , [cnt,onUp,onDown])

    return (
        <CounterContext.Provider value={value}>
            { props.children }
        </CounterContext.Provider>
    );
};

export default CounterProvider;