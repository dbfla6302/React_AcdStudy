import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './assets/css/reset.css';
// import './router02/style.css';
import Home from './router03/Home';
import About from './router03/About';
import Ceo from './router03/Ceo';
import NotFiles from './router03/NotFiles';
import Profile from './router03/Profile';

const data = [
  {title:'html', info:'html에 대한 내용입니다.'},
  {title:'css', info:'css에 대한 내용입니다.'},
  {title:'js', info:'js에 대한 내용입니다.'},
  {title:'react', info:'react에 대한 내용입니다.'},
]

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/profile"> Profile </Link></li>
            <hr/>
            <li><Link to="/ceo/html"> html </Link></li>
            <li><Link to="/ceo/css"> css </Link></li>
            <li><Link to="/ceo/js"> js </Link></li>
            <li><Link to="/ceo/react"> react </Link></li>
          </ul>
        </nav>
        <Routes>
          {/* 화면에 보이는 영역 */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/ceo/:name' element={<Ceo data={data}/>} />
          {/* <Route path='/ceo/:사용자정의변수' element={<Ceo />} /> */}

          <Route path='*' element={<NotFiles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
