// rsc
import React from "react";
import Aa from "./components/aa";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";

// App -> 컴포넌트 : 이름 첫글자 대문자로
const App = () => {
  return (
    <div>
      <h2> 연습입니다. </h2>
      <Aa />
      <hr />
      <Test1 />
      <hr />
      <Test2 />
    </div>
  );
};

export default App;
