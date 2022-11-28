import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [ count, setCount ] = useState(0)

    const ref1 = useRef()
    const ref2 = useRef()
    const onGo  = () => {
        ref1.current.style.background='pink'
        ref2.current.style.background='hotpink'
        setCount( count + 1 )
    }
    //화면에 그려지기 전
    useLayoutEffect(() =>{
        console.log('useLayoutEffect')
       ref1.current.style.background='tomato'   
    }) 

    //화면에 그려지기 후
    useEffect(() =>{
        console.log('useEffect')
        ref2.current.style.background='skyblue'   
     })

    return (
        <div>
            <h1>카운트 : { count } </h1>
            <h1 ref={ref1}>useEffect</h1>
            <h1 ref={ref2}>useLayoutEffect</h1>
            <button onClick={ onGo }>확인</button>
        </div>
    );
};

export default Test1;


/* 
 useEffect 화면에 그려진후 
 useLayoutEffect 화면에 그려지기 전 

 useEffect( 콜백함수 , [] )
 useEffect( 콜백함수 , [의존값] )

 1. 처음에 한번 , 업데이트시 (많이 사용하지 않는다)
 useEffect( () => {
  실행문
 })

 2. 처음에 한번 
 useEffect( () => {
  실행문
 }, [] )

 3. 처음에 한번 , 특정 state, 특정 props 업데이트시** 
 useEffect( () => {
  실행문
 }, [ state, props] )


 4. 처음에 한번 , 특정 state, 특정 props 업데이트시** 
 useEffect( () => {
  실행문

  정리(clean-up) : 뒷정리
  return() => {
    메모리 누수가 발생하지 않도록 정리(clean-up)
  } 

 }, [ state, props] )

 다음 이펙트 처리시 이전에 이펙트를 제거하고 다시 실행할수 있도록 만들어줌 

 사용범위
 1. 특정 props 받아서 갱신할때 
 2. setInterval , setTimeout 시간처리할때 
 3. ajax - 비동기 처리할때 
 4. 외부 라이브러리 사용할때 
*/