import React from 'react';
import styled from 'styled-components'

// 순서 위 / 컴포넌트 아래 안에 css scss 방식
//방법1 const 컴포넌트 = styled.태그``
//방법2 const 컴포넌트 = styled('태그')``

const Container = styled.div`
    margin: 20px auto; padding: 20px;
    border: 1px solid #000;
`
const Con1 = styled.section`
    width: 100%; line-height: 40px; background: pink;
    text-indent: 15px; transition: 0.4s;
    &:hover{
        text-indent: 35px;
        width:120%;
        background: salmon;
    }
`
const Con2 = styled('article')`
    color: #fff;
    margin: 20px 0;
    background: hotpink;
    line-height: 50px;
    text-align: center;
    transition: 0.5s;
    &:hover{
        transform: scale(1.5);
    }
`
const Con3 = styled('button')`
    width: 100%; height: 50px; border: none;
    background: navy; color: #fff;
    transition: 0.5s;
    &:hover{
        background: skyblue; color: #000;
    }
`

const Test7 = () => {
    return (
        <Container>
            <Con1>연습입니다</Con1>
            <Con2>연습입니다</Con2>
            <Con3>연습입니다</Con3>
        </Container>
    );
};

export default Test7;