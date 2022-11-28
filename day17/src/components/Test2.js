import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {
    const [ data , setData ] = useState([])
    
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=568caae4b99148939d9cbc3983658ed8'
        // const url = ''
        axios.get( url )
             .then( res => setData( res.data.articles ) )
    },[])
    return (
        <ul>
            {
                data.map( (item,index) => <li key={index}>
                    <a href={item.url} target="_blank">
                        <img src={item.urlToImage} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </a>
                </li> )
            }
        </ul>
    );
};

export default Test2;