import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { data } = useContext(TodosContext)
    return (
        <ul>
            {
                data.map( item => <TodoItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default TodoList;