import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './User';

const Profile = () => {
    return (
        <div>
            <h1>Profile page</h1>
            <ul>
                <li><Link to="user1">User1</Link></li>
                <li><Link to="user2">User2</Link></li>
                <li><Link to="user3">User3</Link></li>
                <li><Link to="/profile/user4">User4</Link></li>
                <li><Link to="/profile/user5">User5</Link></li>
            </ul>
            <hr />
            <Routes>
                <Route path=":id" element={<User />} />
            </Routes>
        </div>
    );
};

export default Profile;