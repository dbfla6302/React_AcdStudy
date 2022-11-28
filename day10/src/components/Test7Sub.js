import React, { useEffect, useState } from 'react';

const Test7Sub = () => {
    const [ now , setNow ] = useState( new Date() )
    useEffect( () => {
        console.log('시작')
        const timer = setInterval(() => {
            setNow( new Date() )
        }, 1000);
        return() => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    },[])

    return (
        <div>
            <h1> {now.toLocaleDateString()} </h1>
            <h1> {now.toLocaleTimeString()} </h1>
        </div>
    );
};

export default Test7Sub;