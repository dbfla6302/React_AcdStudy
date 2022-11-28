import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test12 = () => {
    const [ data , setData ] = useState([])

    /*useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )
        .then( res => setData( res ) )
    },[])*/

    /*useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => setData( res.data ) )
    },[])*/
    
    /*useEffect( () => {
        const getData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData( data )
        }
        getData()
    },[])*/
    
    useEffect( () => {
        const getData = async() => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData( res.data )
        }
        getData()
    },[])

    return (
        <div>
            <h2> posts </h2>
            <ul>
                {
                    data.map( item => <li key={item.id}> {item.id} / {item.title} </li> )
                }
            </ul>
        </div>
    );
};

export default Test12;