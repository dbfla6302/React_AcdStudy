import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch( action.type ){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

const Test8 = () => {
    const [ count , dispatch ] = useReducer( reducer , initialState )

    return (
        <div>
            <h2>카운트 : { count }</h2>
            <p>
                <button onClick={ () => dispatch({type:'INCREMENT'}) } >증가:INCREMENT</button>
                <button onClick={ () => dispatch({type:'DECREMENT'}) } >감소:DECREMENT</button>
                <button onClick={ () => dispatch({type:'RESET'}) } >초기화:RESET</button>
            </p>
        </div>
    );
};

export default Test8;

/*
useReducer
useState의 대체 함수입니다. 
(state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환합니다. 

useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게 하는데, 이것은 콜백 대신 dispatch를 전달 할 수 있기 때문입니다.

    0. 액션생성 ( 별명 ) - 한글, 영문자 대소문자 가능
        주소 상수형으로 작성한다 : 대문자로 작성한다

    1. useReducer는 상태로직 분리
        - switch() ~ case :분기형
        const 함수명 = (state, action) => {
            switch(action.type){
                case '액션명':
                    return 반환값
                case '액션명':
                    return 반환값
                default:
                    return state
            }
        }

    2. 초기값이 존재해야 한다.
        const initialState = 초기값

    3. const [상태값, 액션을 발생시키는 함수] = useReducer(상태로직함수, 초기값);
       const [state, dispatch] = useReducer(reducer, initialState);

    state : 상태데이터 ( 사용자 정의 이름 )
    dispatch : 액션을 발생시키는 함수, 액션 전달자 ( 사용자 정의 가능하지만 dispatch )
    reducer: 상태로직함수
    initialState : 초기값

    4. dispatch(객체)
       dispatch({type: '액션명'}) : type 반드시 있어야 한다
       action.type = '액션명'
       dispatch({type: '액션명', 키:값, 키:값})
       action.키1, action.키2
*/