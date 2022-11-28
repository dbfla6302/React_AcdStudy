import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    const num  = useSelector(state => state.countA.num)
    const color  = useSelector(state => state.colorChange.color)
    return (
        <div>
            <h1 style={{color:color}}>할일 만들기: 카운트 - {num} </h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todos;