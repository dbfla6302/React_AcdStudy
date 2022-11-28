// import React, { useEffect, useState } from 'react';
import axios from "axios";
import Member from './Member';
import { useAxios } from '../hooks/useAxios';

const Main = () => {
    // const[ data , setData ] = useState([])
    const { data } = useAxios('https://jsonplaceholder.typicode.com/users')

    // useEffect( () => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //          .then( res => setData( res.data ) )
    // },[])

    return (
        <div>
            <h2> 회원수 : { data.length }</h2>
            
            {
                data && data.map( item => <Member key={item.id} item={item} /> )
            }
        </div>
    );
};

export default Main;