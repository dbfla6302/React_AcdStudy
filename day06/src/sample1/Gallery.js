import { useState } from 'react';
import GalleryText from '../sample1/GalleryText';
import GalleryView from '../sample1/GalleryView';
import dataList from '../assets/api/catData'; //data
import './style.css';

/* const dataList = [
    {id:1, imgurl:'./images/cat0.jpg', title:'고양이0', des:'고양이0에 대한 설명입니다.'},
    {id:2, imgurl:'./images/cat1.jpg', title:'고양이1', des:'고양이1에 대한 설명입니다.'},
    {id:3, imgurl:'./images/cat2.jpg', title:'고양이2', des:'고양이2에 대한 설명입니다.'},
    {id:4, imgurl:'./images/cat3.jpg', title:'고양이3', des:'고양이3에 대한 설명입니다.'},
    {id:5, imgurl:'./images/cat4.jpg', title:'고양이4', des:'고양이4에 대한 설명입니다.'},
    {id:6, imgurl:'./images/cat5.jpg', title:'고양이5', des:'고양이5에 대한 설명입니다.'},
    {id:7, imgurl:'./images/cat6.jpg', title:'고양이6', des:'고양이6에 대한 설명입니다.'}
] */

const Gallery = () => {
    const [ data , setData ] = useState( dataList )
    const [ cat , setCat ] = useState(data[0])

    // 행동
    const onView = ( id ) => {
        // setCat(data[ id - 1 ])
        setCat(data.find( item => item.id === id ))
    }

    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView} />
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;