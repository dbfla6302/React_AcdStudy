import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const TodoInput = () => {
    const { text, changeInput, onAdd } = useContext(TodosContext)
    const onSubmit = (e) => {
        e.preventDefault()
        if( !text ) return
        onAdd( text )
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={changeInput} value={text} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;