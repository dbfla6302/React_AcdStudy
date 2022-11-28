import React from 'react';
import { useDispatch} from 'react-redux'
import { onDel, onToggle } from '../../store/modules/todos';
const TodoItem = ({ item }) => {
    const { id, text, isChk} = item 
    const dispatch  = useDispatch()
    return (
        <li style={{color: isChk ? 'tomato':'#000' }}>
           <input type="checkbox" checked={isChk} onChange={ () => dispatch(onToggle(id)) }/>
           {text}
           <button onClick={()=>dispatch(onDel(id))}>삭제</button> 
        </li>
    );
};

export default TodoItem;