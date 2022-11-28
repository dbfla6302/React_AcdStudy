import React, { useEffect, useRef, useState } from 'react';

const Test3 = () => {
    const ref1 = useRef()
    const ref2 = useRef()

    const [ count , setCount ] = useState(0)
    const onColor = () => {
        setCount( count + 1 )
        ref1.current.style.backgroundColor="pink"
        ref2.current.style.backgroundColor="lavender"
    }

    // useEffect : 화면에 그려진 후 실행
    // 1 처음 한번 , 갱신시 - 다시 그리기
    useEffect( () => {
        console.log('실행')
        ref1.current.style.backgroundColor="hotpink"
        ref2.current.style.backgroundColor="violet"
    }, [] )
    return (
        <div style={{margin:30}}>
            <h2>카운트 : {count}</h2>
            <h2 ref={ref1} style={{paddingLeft:10}}> useEffect : </h2>
            <h2 ref={ref2} style={{paddingLeft:10}}> useLayoutEffect : </h2>

            <button onClick={onColor}>카운트 + 컬러</button>
        </div>
    );
};

export default Test3;

/*
Effect Hook

Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.

side effect : 부수효과
              함수외에 결과가 나오는 것
              함수외에 다른일을 하는 것

React의 class 생명주기 메서드에 친숙하다면, useEffect Hook을

class에서는
componentDidMount : 처음 한번만 실행
componentDidUpdate : 갱신
componentWillUnmount : 종료시
가 합쳐진 것으로 생각해도 좋습니다.

위 3개의 기능을 useEffect가 가지고 있음

useEffect( 콜백함수 , [의존값] )

1. 처음 실행 한번 , 갱신 실행 - 많이 사용하지 않는다
useEffect( () => {
    실행문
})

2. 처음 한번만 실행
useEffect( () => {
    실행문
} , [] )

3. 의존값 : state , props ***
useEffect( () => {
    실행문
} , [의존값] )

*/