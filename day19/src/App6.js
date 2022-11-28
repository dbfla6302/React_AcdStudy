import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './router06/Main';
import Member from './router06/Member';
import MemberDetail from './router06/MemberDetail';

const App = () => {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="main" />
        <Route path="aaa" />
        <Route path="bbb" />
        <Route path="ccc" />
      </Route>

      <Route path="member" >
          {/* <Route index element={<Member />} /> 
            index 일치
          */}
          <Route element={<Member />} />
          <Route path=":memberID" element={<MemberDetail />} />
      </Route>
    </Routes>
    </>
    </BrowserRouter>
  );
};

export default App;