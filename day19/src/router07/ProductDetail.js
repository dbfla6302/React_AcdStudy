import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productID } = useParams()

    return (
        <div className="item">
            <h2>운동화 상세페이지</h2>
            <h3>제품이름출력 - 가격: xx 원</h3>
            <p><img src="" alt="" /></p>
            <p>제품설명: xxx</p>
            <button>제품목록보기</button>
        </div>
    );
};

export default ProductDetail;