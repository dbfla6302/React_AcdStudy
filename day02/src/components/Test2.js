import React, { Fragment } from 'react';

const Test2 = () => {
    // 함수영역
    const name = '김태리'
    const age = 25
    const addr = '서울'
    const tel = '010-1111-2222'
    const css1 = {
        backgroundColor: 'hotpink',
        fontSize: 20,
        padding: 10,
        margin: 10,
        width: 300,
        textAlign: 'center'
    }
    const css2 = {
        width: 300,
        height: 50,
        border: '1px solid #000',
        lineHeight: '50px',
        textAlign: 'center',
        listStyle: 'none',
        marginBottom: 10
    }

    return (
      <>
        {/* JSX - 화면에 보이는 영역 */}
        <h2 style={css1}> 신상명세서 </h2>
        {/* 자바스크립트 출력할 경우는 반드시 {} 안에 써야함 */}
        <ul>
          <li style={css2}>이름 : {name}</li>
          <li style={css2}>나이 : {age}</li>
          <li style={{backgroundColor: 'tomato', height: 40, lineHeight: '40px'}}>주소 : {addr}</li>
          <li>연락처 : {tel}</li>
        </ul>
      </>
    );
};

export default Test2;