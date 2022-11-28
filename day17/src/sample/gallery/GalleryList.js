import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import Masonry from 'react-masonry-css'
import { ImageList } from '../styled/galleryStyle';

const GalleryList = ({ data }) => {
    return (
        <ImageList>
            <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {/* array of JSX items */}
            {
                data.map( item => <GalleryItem key={item.id} item={item} /> )
            }
            </Masonry>
        </ImageList>
    );
};

export default GalleryList;