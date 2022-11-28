import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    width:${ props => props.width ? props.width : '300px' };
    margin: 20px auto;
    background:${ props => props.bgcolor };
    padding:20px;
    height:${ props => props.height ? 'auto' : '300px' };
`
const Box = styled.button`
    width:${ props => props.width ? props.width : '100px' };
    height:${ props => props.height ? props.height : '50px' };
    margin:5px;
    background:${ props => props.bg };
    border:none;
    ${ props => props.primary && css`
        background: lime;
        color:#fff;
        font-size:20px;
        width:100%;
        height:50px;
        transition:0.5s;
        &:hover{
            background:#000;
        }
    ` }
`

const Test9 = () => {
    return (
        <Container width="450px" bgcolor="wheat">
            <Box width="120px" bg="hotpink" height="40px">Test</Box>
            <Box width="150px" bg="skyblue">Test</Box>
            <Box width="200px" height="60px">Test</Box>
            <Box height="40px" bg="hotpink">Test</Box>
            <Box primary >Test</Box>
        </Container>
    );
};

export default Test9;