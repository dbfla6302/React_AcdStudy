import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    margin: 20 auto;
    padding: 20px;
    border: 1px solid #000;
    text-align: center;
    h2 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`

const Button = styled.button`
    padding: 15px 40px 25px;
    font-size: 40px;
    border: none;
    margin-right: 5px;
    background:pink;
    &.up::after{ content: "๐ค"; }
    &.down::after{ content: "๐ฅ"; }

    &:hover{
        background:tomato;
    }
    &:disabled{
        filter: grayscale(100%);
        background: #333;
        cursor: not-allowed;
    }
`

const Test10 = () => {

    const [ count , setCount ] = useState(0)
    const [ max ] = useState(10)
    const [ min ] = useState(0)

    const increment = () => {
        // ์ผํญ์ฐ์ฐ์ 10๊น์ง๋ง ์ฆ๊ฐ
        setCount( count > max ? max : count + 1 )
        // setCount( count < 10 ? count + 1 : count )
    }

    const decrement = () => {
        // ์ผํญ์ฐ์ฐ์ 0๊น์ง๋ง ๊ฐ์
        setCount( count < min ? min : count - 1 )
        // setCount( count > 0 ? count - 1 : count )
    }

    return (
        <Container>
            <h2> ์นด์ดํธ : {count} </h2>
            <Button onClick={decrement} className="down" disabled={ count === min }></Button>
            <Button onClick={increment} className="up" disabled={ count === max }></Button>
        </Container>
    );
};

export default Test10;