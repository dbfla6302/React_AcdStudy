import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const useAxios = ( url ) => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState( false )
    const [ error , setError ] = useState( null )

    useEffect( () => {
        axios.get( url )
             .then( res => {
                setData( res.data )
                setError ( null )
                setLoading( true )
             })
             .catch( error  => {
                setData([])
                setError('주소가 잘못되었습니다.')
                setLoading( false )
             })
    },[url])

    return { data  , error  , loading }
};

 