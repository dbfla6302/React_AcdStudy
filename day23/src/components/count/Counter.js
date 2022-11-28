import React from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import { add, decrement, increment, reset } from '../../store/modules/counter';

const Counter = () => {
    const num  = useSelector(state => state.countA.num)
    const color  = useSelector(state => state.colorPage.color)
    const dispatch  = useDispatch()
    return (
        <div>
            <h1 style={{color:color}}> 카운터  : {num} </h1>
            <p>
                <button onClick={()=>dispatch(increment())}>증가</button>
                <button onClick={()=>dispatch(decrement())}>감소</button>
                <button onClick={()=>dispatch(add(10))}>10증가</button>
                <button onClick={()=>dispatch(reset())}>초기화</button>
            </p>
        </div>
    );
};

export default Counter;