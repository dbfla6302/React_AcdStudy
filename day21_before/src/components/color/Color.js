import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {
    const {color, onHotpink, onLime, onSkyblue, onTomato} = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color:color}}>color : {color}</h1>
            <p>
                <button onClick={ () => onTomato() }>tomato</button>
                <button onClick={ () => onHotpink() }>hotpink</button>
                <button onClick={ () => onSkyblue() }>skyblue</button>
                <button onClick={ () => onLime() }>lime</button>
            </p>
        </div>
    );
};

export default Color;