import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = ( url ) => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState([])
    const [ error , setError ] = useState([])

    useEffect( () => {
        axios.get(url)
             .then( res => {
                setData( res.data )
                setLoading( true )
                setError( null )
             })
             .catch( error => {
                setData([])
                setLoading( false )
                setError('주소가 존재하지 않습니다.')
             })
    },[ url ])

    return { data , loading , error }
};