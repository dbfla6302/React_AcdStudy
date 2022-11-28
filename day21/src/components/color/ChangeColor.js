import React, { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    const {color, changeColor} = useContext(ChangeColorContext)
    return (
        <div>
            <h1 style={{color:color}}>ChangeColor : { color }</h1>
            <p>
                <button onClick={ () => changeColor("red") }>red</button>
                <button onClick={ () => changeColor("green") }>green</button>
                <button onClick={ () => changeColor("blue") }>blue</button>
                <button onClick={ () => changeColor("pink") }>pink</button>
            </p>
        </div>
    );
};

export default ChangeColor;