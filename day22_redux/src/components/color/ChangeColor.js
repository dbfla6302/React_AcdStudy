import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ChangeColor = () => {
    const color = useSelector( state => state.changecolor.color )
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={color}>컬러 : {color}</h1>
            <p>
                <button>red</button>
                <button>green</button>
                <button>blue</button>
            </p>
        </div>
    );
};

export default ChangeColor;