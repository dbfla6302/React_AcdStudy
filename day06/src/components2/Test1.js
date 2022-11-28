import React from 'react';
// src에 있는 이미지 가져올경우
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";

const Test1 = () => {
    return (
        <div>
            <img src={img1} alt="" width="300" />
            <img src={img2} alt="" width="300" />
            <hr />
            {/* public 안에 있는 이미지 기본경로 */}
            <img src="./images/cat0.jpg" alt="" width="300" />
            <img src="./images/cat1.jpg" alt="" width="300" />
        </div>
    );
};

export default Test1;