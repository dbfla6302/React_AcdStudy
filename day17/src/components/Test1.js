import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
    const [ data , setData ] = useState([])
    // const [ data , setData ] = useState({})
    // const [ data , setData ] = useState(null)
    useEffect( () =>{
        const url = 'https://jsonplaceholder.typicode.com/todos'
        axios.get( url )
             .then( res => setData( res.data ) )
    },[])
    return (
        <div>
            <ul>
                {
                    data && data.map( item => <li key={item.id}>{item.id} / {item.title}</li> )
                }
            </ul>
        </div>
    );
};

export default Test1;