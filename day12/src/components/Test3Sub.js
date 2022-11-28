import React, { useEffect, useState } from 'react';

const Test3Sub = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const onMove = (e) => {
        console.log('mousemove')
        setX( e.clientX )
        setY( e.clientY )
    }

    //화면에 그려진후 마우스 좌표를 출력하기 
    useEffect( () => {
        console.log('useEffect')
        window.addEventListener('mousemove', onMove )
        
        //이펙트 뒷정리
        return() => {
            console.log('뒷정리')
            window.removeEventListener('mousemove', onMove )
        }
    },[])

    return (
        <div>
            <h2> 마우스 좌표 </h2>
            <div style={{ width:300, height:80, border:'1px solid #000', margin:20, lineHeight:4, fontSize:20, textAlign:'center'}}>
                x축 : {x}  / y축 : {y}
            </div>
        </div>
    );
};

export default Test3Sub;