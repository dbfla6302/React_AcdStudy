import { useDispatch } from 'react-redux';
import { remove, toggle } from '../store/modules/todos';

const TodoItem = ({item}) => {
    const { id , text, done } = item 
    const dispatch  = useDispatch()
    return (
        <li > 
        <span className={ done === true ? 'on' : '' } onClick = { () => dispatch( toggle(id))}>
            대기번호 : {id}  &nbsp;&nbsp;&nbsp;   {text} </span>
        <button  onClick = { () => dispatch( toggle(id))}> 수정</button>
        <button  onClick = { () => dispatch( remove(id))}> 삭제</button>
    </li>
    );
};

export default TodoItem;