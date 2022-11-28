import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './assets/css/reset.css';
// import './router02/style.css';
import Home from './router04/Home';
import About from './router04/About';
import NotFiles from './router04/NotFiles';
import Profile from './router04/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/profile"> Profile </Link></li>
          </ul>
        </nav>
        <Routes>
          {/* 화면에 보이는 영역 */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />}>
            <Route path=':name' />
          </Route>
          {/* <Route path='/profile:name' element={<Profile />} /> */}

          <Route path='*' element={<NotFiles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
