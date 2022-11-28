import React, { useMemo, useState } from 'react';

const Test1 = () => {
    const [ cnt1 , setCnt1 ] = useState(1)
    const [ cnt2 , setCnt2 ] = useState(10)

    const increment1 = () => {
        setCnt1( cnt1 + 1 )
    }
    const increment2 = () => {
        setCnt2( cnt2 + 1 )
    }
    // 사용자 정의 함수
    const isEvent = useMemo(() => {
        console.log('isEvent')
        console.log(cnt1)
        return cnt1 % 2 === 0
    },[ cnt1 ])

    return (
        <div>
            <h2>카운트 : {cnt1}</h2>
            <button onClick={increment1}>증가</button>

            <h2>카운트 : {cnt2}</h2>
            <button onClick={increment2}>증가</button>
            <hr />
            <h1>결과 : { isEvent ? '짝수' : '홀수'}</h1>
        </div>
    );
};

export default Test1;

/*
  useMemo
  useCallback

  메모이제이션된 값을 반환합니다.

  “생성(create)” 함수와 그것의 의존성 값의 배열을 전달하세요. 
  useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다. 
  이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

  사이드 이펙트(side effects)는 useEffect에서 하는 일이지 useMemo에서 하는 일이 아닙니다.

  :: 렌더링 될때마다 내부의 것을 다시 생성(선언) 해준다.
     내부의 것을 기억하지 못한다.
     새 값을 계산한다.
     새 함수를 생성한다.

     메모이제이션 : 기억 / 값을 기억 useMemo, 함수 기억 useCallback
     useMemo: 사용자가 함수를 만들어서 return 값을 기억하고 변경이 이루어질때(의존성) 다시 재계산한다.

     꼭 써야하는 경우context( 상태관리에서 )

     useCallback : 함수를 기억한다.
                   변경이 이어질때(의존성) 다시 생성한다.

      useMemo( 콜백함수 , [의존성] )
      useMemo( () -> {}) , [] ) : 한번만
      useMemo( () -> {}) , [바뀌는 값] ) : 바뀌는 값이 있을때마다 재계산

      useCallback( 콜백함수 , [의존성] )
      useCallback( () -> {}) , [] ) : 한번만
      useCallback( () -> {}) , [바뀌는 값] ) : 바뀌는 값이 있을때마다 다시 생성

*/ 