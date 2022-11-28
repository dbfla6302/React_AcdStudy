import React from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import TodoItem from './TodoItem';
const TodoList = () => {
   const data = useSelector( state  => state.todos.data )
    return (
        <ul>
           {data.map(item => <TodoItem item={item} key={item.id}/>)} 
        </ul>
    );
};

export default TodoList;