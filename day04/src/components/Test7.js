import React from 'react';

const Test7 = () => {

    // event, evt, e
    const handleClick = ( e ) => {
        console.log( e.target )
        // 실제로 가리킨 대상
        console.log( e.currentTarget )
        // 이벤트가 있는 대상
    }
    return (
        <div>
            <button onClick={ handleClick }>
                <span>안녕하세요 안녕하세요</span>
                <br/>
                <b>연습 연습 연습 연습 연습</b>
            </button>
        </div>
    );
};

export default Test7;