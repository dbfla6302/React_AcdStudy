import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: ${props => props.ww};
    height: ${props => props.height};
    border: 1px solid #000;
    margin: 50px;
    padding: 20px;
    text-align: center;
    line-height: 150px;
    font-size: 25px;
    background: ${props => props.bg ? props.bg : "hotpink"};
`

const Test8 = () => {
    return (
        <Container ww="350px" height="200px" bg="pink">
            연습입니다.
        </Container>
    );
};

export default Test8;