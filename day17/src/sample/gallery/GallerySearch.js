import React, { useState } from 'react';
import { ImageSearch } from '../styled/galleryStyle';

const GallerySearch = ({ onSearch }) => {
    const [ text , setText ] = useState('')
    const changeInput = (e) => {
        const { value } = e.target
        setText( value )
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(text)
    }

    return (
        <ImageSearch onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} />
            <button type="submit">검색</button>
        </ImageSearch>
    );
};

export default GallerySearch;