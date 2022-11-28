import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({ item }) => {
    const { id, name, email } = item
    const navigate = useNavigate()
    const css ={
        border:'1px solid tomato',
        margin:15, padding:15
    }

    const onGo = () => {
        navigate(`/member/${id}`)
    }
    return (
        <div style={css}>
            <p> 번호 : {id} </p>
            <h4>이름 : {name}</h4>
            <h4>이메일 : {email}</h4>
            <p>
                <Link to={`/member/${id}`}>상세페이지</Link>
            </p>
            <button onClick={onGo}>자세히보기+</button>
        </div>
    );
};

export default Member;