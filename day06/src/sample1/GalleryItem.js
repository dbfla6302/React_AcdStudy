import React from 'react';

const GalleryItem = ({ item , onView }) => {
    const { imgurl , title , id } = item
    return (
        <li>
            <img src={imgurl} alt={title} onClick={() => onView(id)} />
        </li>
    );
};

export default GalleryItem;