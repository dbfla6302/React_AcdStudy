import React, { useState } from 'react';

//함수
export const useCounter = ( initialState =  10 ) => {
    const [ state, setState] = useState( initialState )
    const onUp = ()  => {
        setState( state + 1)
    }
    const onDown = ()  => {
        setState( state - 1)
    }
    const reset = ()  => {
        setState( 0  )
    }
    return { state , onUp , onDown , reset }
};

 