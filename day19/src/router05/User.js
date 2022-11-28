import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const User = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const users = data[id]

    const onGo1 = () => {
        navigate('/')
    }
    const onGo2 = () => {
        navigate('/about')
    }
    const onGo3 = () => {
        navigate('/profile')
    }
    const onGo4 = () => {
        navigate(-1) //한단계이전 , 두단 -2
    }
    const onGo5 = () => {
        navigate(1)   //한단계 앞으로
    }

    return (
        <div>
            <h1>User page</h1>
            <h2>이름: {users.name}</h2>
            <h2>직업: {users.job}</h2>
            <p>
                <button onClick={onGo1}>home</button>
                <button onClick={onGo2}>about</button>
                <button onClick={onGo3}>profile</button>
                <button onClick={onGo4}>이전</button>
                <button onClick={onGo5}>다음</button>
            </p>
        </div>
    );
};

export default User;