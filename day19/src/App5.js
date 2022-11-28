import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './router05/About';
import Home from './router05/Home';
import Profile from './router05/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <>
    <ul>
      <li><Link to="/"> Home </Link></li>
      <li><Link to="/about"> About </Link></li>
      <li><Link to="/profile"> Profile </Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />}>
          <Route path=":id" />
      </Route>
    </Routes>
    </>
    </BrowserRouter>
  );
};

export default App;