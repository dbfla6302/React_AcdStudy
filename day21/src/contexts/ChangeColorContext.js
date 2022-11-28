import React, { createContext, useMemo, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ( props ) => {
    const [ color, setColor ] = useState('skyblue')
    const changeColor = ( text ) => {
        setColor( text )
    }

    // 변수 = useMemo( () => ({}), [의존값] )
    const value = useMemo( () => ({color, changeColor}) , [color, changeColor] )

    return (
        <ChangeColorContext.Provider value={value}>
            { props.children }
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;