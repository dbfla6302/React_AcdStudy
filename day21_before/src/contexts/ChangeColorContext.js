import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ( props ) => {
    const [ color, setColor ] = useState('skyblue')
    const changeColor = ( text ) => {
        setColor( text )
    }

    return (
        <ChangeColorContext.Provider value={{color, changeColor}}>
            { props.children }
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;