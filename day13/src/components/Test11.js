import React from 'react';
import styled, { css, keyframes } from 'styled-components'

const Container = styled.div`
    width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: skyblue;
`

const ani = keyframes`
    0% { transform: translateY(0) }
    25% { transform: translateY(-20px) rotate(20deg) }
    50% { transform: translateY(10px) }
    75% { transform: translateY(-20px) rotate(-20deg) }
    100% { transform: translateY(0px) }
`

const Hot = styled.div`
    font-size: 100px;
    animation: ${ ani } 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`

const Test11 = () => {
    return (
        <Container>
            <Hot> 🎩 </Hot>
        </Container>
    );
};

export default Test11;