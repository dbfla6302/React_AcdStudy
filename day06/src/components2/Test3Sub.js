import React from 'react';

const Test3Sub = ({ onDel , onAdd ,onMod }) => {
    return (
        <div>
            <p>
                <button onClick={ () => onDel(1) }>삭제</button>
            </p>
            <p>
                <button onClick={ () => onAdd('강호동') }>추가</button>
            </p>
            <p>
                <button onClick={ () => onMod(2) }>수정</button>
            </p>
        </div>
    );
};

export default Test3Sub;