import React, { useContext, useState } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const TodoItem = ({ item }) => {
    const { id, text, isChk } = item
    const { onDel, onToggle } = useContext(TodosContext)

    return (
        <li style={{color: isChk ? 'red' : '#000'}}>
            <input type="checkbox" onChange={() => onToggle(id)} checked={isChk} />
            { text } <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default TodoItem;