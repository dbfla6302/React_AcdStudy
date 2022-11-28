import React, { useRef } from 'react';

const Test9 = () => {
    // 1. 실제 dom 연결
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const onView = () => {
        ref1.current.style.backgroundColor = 'lightcoral'
        ref1.current.style.padding = '10px 20px'
        ref1.current.style.color = '#fff'

        const data = {
            id : ref2.current.value ,
            pw : ref3.current.value 
        }
    }

    return (
        <div>
            {/* 수업용 - 실제로 사용예시로 추천하지 않음 */}
            <h1 ref={ref1}>안녕하세요</h1>
            <input type="text" ref={ref2} />
            <input type="text" ref={ref3} />
            <button onClick={ onView }>확인</button>
        </div>
    );
};

export default Test9;