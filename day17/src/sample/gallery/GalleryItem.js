import React from 'react';
import styled from 'styled-components';
import { ImageItem } from '../styled/galleryStyle';

const GalleryItem = ({ item }) => {
    const { user, webformatURL, tags, downloads, likes, views } = item
    const tagList = tags.split(',')
    // 문자열을 배열로 처리 - map을 span 처리
    return (
        <ImageItem>
            <img src={webformatURL} alt={user} />
            <h2>{user}</h2>
            <ul>
                <li>조회수 : {views}</li>
                <li>다운로드 : {downloads}</li>
                <li>좋아요 : {likes}</li>
            </ul>
            <p>태그 : { tagList.map( (item,idx) => <span key={idx}>#{item.trim()}</span> ) }</p>
        </ImageItem>
    );
};

export default GalleryItem;