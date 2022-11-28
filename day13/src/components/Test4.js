import React from 'react';
import './Test4.css'
import styles from './Test4.module.css'

const Test4 = () => {
    return (
        <div>
            <div className="box">test</div>
            <div className={styles.box}>test</div>
        </div>
    );
};

export default Test4;

/* 
    1. css는 모든 스타일을 하나의 파일에 작성하는것은 좋지 않다 
       예) 앞의 예시처럼 style.css 모든 내용의 css처리 
       유지보수나 재사용의 문제가 있다 

    2. 컴포넌트 단위로 css(scss)를 하나씩 만들어서 처리하는것이 좋다 
       예) Todos 예제 처럼    
       1) todos폴더 - Todos.js / Todos.css 
       2) todoInput폴더 - TodoInput.js / TodoInput.css 

    3. 컴포넌트 단위로 module.css(scss)를 하나씩 만들어서 처리하는것이 좋다 
       예) Todos 예제 처럼  -  module.css 
       1) todos폴더 - Todos.js / Todos.module.css
       2) todoInput폴더 - TodoInput.js / TodoInput.module.css   

       module.css(scss)
       - 기존 css의 클래스명과 겹치지 않는다 
       - [filename]\_[classname]\_\_[hash].
       - Test4.module.css 안에 .box 클래스명 
         Test4_box.__hash
         import 참조변수 from './파일명.module.css';
         적용  className={참조변수.클래스명}

*/
