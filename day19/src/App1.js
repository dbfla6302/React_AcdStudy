import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import About from "./router01/About";
import Ceo from "./router01/Ceo";
import Home from "./router01/Home";
import Profile from "./router01/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/ceo">Ceo</Link> </li>
            <li> <Link to="/profile">Profile</Link> </li>
             
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/ceo" element={<Ceo />}/>
          <Route  path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
