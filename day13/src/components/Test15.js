import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test15 = () => {
    const [ post , setPost ] = useState({})
    const [ id , setId ] = useState(3)
    const [ num , setNum ] = useState()

    const changeInput = (e) => {
        const { value } = e.target
        setId( value )
    }

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url)
             .then( res => setPost( res.data ) )
    },[num] )

    const onShow = () => {
        setNum(id)
    }

    return (
        <div>
            <p>
                <input type="text" value={id} onChange={changeInput} />
                <button onClick={onShow}>검색</button>
            </p>
            <h3>
                { post.id } / { post.title }
            </h3>
        </div>
    );
};

export default Test15;