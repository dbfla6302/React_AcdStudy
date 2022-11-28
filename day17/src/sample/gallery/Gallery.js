import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import { Container } from '../styled/galleryStyle';

const Gallery = () => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState(true)
    const [ error , setError ] = useState(null)
    const [ text , setText ] = useState('pink+sky')

    useEffect( () => {
        const API_KEY = '14151222-52c99d790266711ee6bef586a'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`

        axios.get( url )
             .then( res => {
                setData( res.data.hits )
                setLoading( false )
                setError(null)
             })
             .catch( error => {
                setData([])
                setLoading( true )
                setError('api 주소를 찾을 수 없습니다.')
             })
    },[])

    const onSearch = (e) => {
        setText(e)
        console.log(text)
    }

    return (
        <Container width="1400px">
            <GallerySearch onSearch={onSearch} />
            <GalleryList data={data} />
        </Container>
    );
};

export default Gallery;