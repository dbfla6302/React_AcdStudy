import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test14 = () => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ]  = useState( false )
    const [ error , setError ] = useState(null)

    useEffect( () => {
        const getData = async() => {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            
            try{
                const res = await axios.get( url )
                setData( res.data )
                setLoading( true )
                setError( null )
            }catch(e){
                setError(e)
            }

            setLoading( false )
        }
        getData()
    },[])

    if( loading ) return <h3> 로딩중.... </h3>
    if( error ) return <h3> 에러발생.... </h3>
    if( !data ) return null

    return (
        <div>
            {
                data.map( item => <p key={item.id}> {item.id} / {item.title} </p> )
            }
        </div>
    );
};

export default Test14;