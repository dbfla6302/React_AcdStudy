import {BrowserRouter,Routes, Route, Link } from "react-router-dom"

import './assets/css/reset.css'
import About from "./router02/About";
import Ceo from "./router02/Ceo";
import Home from "./router02/Home";
import NavBar from "./router02/NavBar";
import NotFiles from "./router02/NotFiles";
import Profile from "./router02/Profile";
import './router02/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/ceo" element={ <Ceo /> } />
          <Route path="/Profile" element={ <Profile /> } />
          <Route path="*" element={ <NotFiles /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;