import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test13 = () => {
    const[ data, setData ] = useState([])
    const[ loading, setLoading ] = useState(true)
    const[ error, seEerror ] = useState(null)

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => {    //응답성공
                setLoading( false )
                setData( res.data )
                seEerror(null)
             })
             .catch( error => { //응답실패
                setLoading( true )
                setData([])
                seEerror('주소를 찾을 수 없습니다.')
             })
    },[])

    return (
        <div>
            { data && loading ? <h2>로딩중....</h2> : 
                data.map( item => <p key={item.id}> {item.id} / {item.title} </p> )
            }
            <h3> { error ? error : null } </h3>
        </div>
    );
};

export default Test13;