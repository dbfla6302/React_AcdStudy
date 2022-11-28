import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Ceo from './Ceo';

const Profile = () => {
    return (
        <div className="page">
            <h1>Profile page</h1>
            <ul>
                <li><Link to="html">html</Link></li>
                <li><Link to="css">css</Link></li>
                {/* 상대경로 */}
                <li><Link to="/profile/js">js</Link></li>
                <li><Link to="/profile/react">react</Link></li>
            </ul>
            <hr />
            <Routes>
                <Route path=":name" element={<Ceo />}></Route>
            </Routes>
        </div>
    );
};

export default Profile;