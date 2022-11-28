import React, { useEffect } from 'react';

const Message = ({ msg , isShow , setIsShow }) => {
    useEffect( () => {
        //2초후 사라지기 
        const timer  = setTimeout( () => {
            setIsShow( false )
        },2000)
        return() => {
            clearTimeout( timer )
        }
    },[ msg ])

    return (
        <>
            <div className={`message ${isShow ? "on":""}`} >
                { msg }
            </div>        
        </>        
    );
};

export default Message;