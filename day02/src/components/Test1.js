import React, { Fragment } from "react"; 
// React - export default
//  { Fragment } - export

const Test1 = () => {
  return (
    <>
      <h2>JSX영역</h2>
      <h4>열린태그, 닫는태그, 빈태그 / </h4>
      <p>
        return 에는 반드시 div( section, article ..) 한줄 이상은 에러가 발생한다
        Fragment 의미없이 묶어준다 영역으로 처리 - 태그표시가 안된다
        React.Fragment
      </p>
      <img />
      <input />
      //나는 주석 /* 나도 주석 */
      {/* 주석 */}
      <p
      //한줄 주석
      /*
                여러줄 주석
            */
      >
        나는 문단입니다.
      </p>
    </>
  );
};

export default Test1;
