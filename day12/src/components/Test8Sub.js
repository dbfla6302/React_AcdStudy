import React, { useEffect } from 'react';

const Test8Sub = ({ msg , isShow , setIsShow }) => {

    useEffect( () => {
        let timer = null 
        timer = setTimeout( () => {
            setIsShow( false )
        },3000)
        return() => {
            clearTimeout( timer )
        }
    },[ isShow ] )

    return (
        <>
           {
            isShow && 
            <div style={{ width:400, height:80, border:'1px solid #000', fontSize:20, textAlign:'center',lineHeight:4 , margin:40}}>
            { msg }
           </div>

           }
           <p> 3초후에 사라지기 </p>
        </>
    );
};

export default Test8Sub;