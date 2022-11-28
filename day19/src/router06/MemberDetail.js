// import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAxios } from '../hooks/useAxios';

const MemberDetail = () => {
    const { memberID } = useParams()
    // const [ member, setMember ] = useState({})
    const { data } = useAxios(`https://jsonplaceholder.typicode.com/users/${memberID}`)
    const navigate = useNavigate()
    const { name, email, phone, website } = data

    // useEffect( () => {
    //     const url = `https://jsonplaceholder.typicode.com/users/${memberID}`
    //     axios.get( url )
    //          .then( res => setMember( res.data ) )
    // },[])

    const onGo1 = () => {
        navigate('/')
    }

    const css ={
        border:'3px solid hotpink',
        margin:15, padding:15
    }

    return (
        <div style={css}>
            <h3>이름 : {name}</h3>
            <h3>이메일 : {email}</h3>
            <h3>전화번호 : {phone}</h3>
            <h3>웹사이트 : {website}</h3>
            <p>
                <button onClick={onGo1}>리스트 목록</button>
            </p>
        </div>
    );
};

export default MemberDetail;