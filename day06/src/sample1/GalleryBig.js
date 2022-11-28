import React from 'react';

const GalleryBig = ({ cat }) => {
    const { imgurl , title } = cat
    return (
        <div className="bigimg">
            <h2>{title}</h2>
            <img src={imgurl} alt="타이틀" />
        </div>
    );
};

export default GalleryBig;