/*
import React from 'react'; - node_modules
import 참조변수 from '경로';
import 참조변수 from '경로/파일명.js'; 확장자는 - js, jsx 둘다 가능

컴포넌트 :  첫글자는 대문자로
const 컴포넌트명 = () => {
    함수영역
    모든 제어문 가능
    
    return (
        <div>
            화면에 보이는 영역
            JSX영역 : 모든 제어문이 가능하지 않다
                      삼항 , &&
                      map 등등..
        </div>
    );
};

export default 컴포넌트명;

*/

import React from 'react';

const aa = () => {
    return (
      <div>
        <h2>나는 aa 컴포넌트 입니다.</h2>
        <ul>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ul>
      </div>
    );
};

export default aa;