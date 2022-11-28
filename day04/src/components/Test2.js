import React, { useState } from 'react';

const Test2 = () => {
    const [name, setName ] = useState('홍길동');
    const [age, setAge ] = useState(10);
    const [color, setColor ] = useState('pink');

    const onName1 = () => {
        setName('김태리')
    }
    const onName2 = () => {
        setName('김다미')
    }
    const onName3 = () => {
        setName('송혜교')
    }
    const onAge1 = () => {
        setAge(20)
    }
    const onAge2 = () => {
        setAge(15)
    }
    return (
        <div>
            <h2> useState : 값이 유동으로 변경 </h2>
            <h3 style={{color:color}}>이름 : {name} / 나이 : {age}살 / 컬러 : {color}</h3>
            <p>
                <button onClick={onName1}>김태리</button>
                <button onClick={onName2}>김다미</button>
                <button onClick={onName3}>송혜교</button>
            </p>
            <p>
                <button onClick={onAge1}>20살</button>
                <button onClick={onAge2}>15살</button>
            </p>
            <p>
                <button onClick={() => setColor('hotpink')}>hotpink</button>
                <button onClick={() => setColor('tomato')}>tomato</button>
                <button onClick={() => setColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default Test2;

/*
    Hooks - useState
    1. 렌더링 될때마다 내부 것(변수, 함수)등 기억하지 못하고 새로 만든다 - 화면에 새로 그려내는 방식, 다시 생성 초기화

    값을 내부에서 유지하기 위해서 - hook
    useXXX
    
    useState - 값이 유동으로 변경할 경우
    const [상태데이터, 상태값을 변경해주는 함수] = useState(초기값)
    const [ state, setter함수 ] = useState(초기값)

    예)
    const [ aaa, bbb ] = useState(10)
    aaa = 10
    bbb(값 또는 수식)
    bbb(20)
    aaa = 20

    새로운 state 변수를 선언하고, count라 부르겠습니다.
    const [사용자정의이름, 사용자정의이름] = useState(0);
    사용자정의이름 :  한글, 영문

    암묵적 약속
    const [count, setCount] = useState(0);
    const [dog, detDog] = useState('강아지')
    const [상태변수, set상태함수] = useState(초기값)
    초기값 :  문자, 숫자, 논리값 [], {}

*/ 