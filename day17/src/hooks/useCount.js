import React, { useState } from 'react';

export const useCount = ( initialState = 10 ) => {
    // 모든 상태값과 행동 함수
    const [ state , setState ] = useState( initialState )

    const onUp = () => {
        setState( state + 1 )
    }

    const onDown = () => {
        setState( state - 1 )
    }

    const onReset = () => {
        setState(0)
    }

    return { state , onUp , onDown , onReset }
};