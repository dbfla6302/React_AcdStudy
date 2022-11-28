import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css';

const Todos = () => {
    const [ data, setData ] = useState([
        {id:1, text:'운동하기', isChk:true},
        {id:2, text:'12시 회사미팅', isChk:false},
    ])
    // const no = useRef(3)
    const no = useRef(data.length + 1)

    // 삭제
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ))
    }
    // 추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text,
                isChk:false
            }
        ])
    }
    // 수정
    const onMod = (id) => {
        setData( data.map( item => item.id === id ? {...item, isChk:!item.isChk} : item ))
    }

    return (
        <div className="Todos">
            <h1>TodoList</h1>
            {/* <h1>할일 만들기</h1> */}
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onMod={onMod} />
        </div>
    );
};

export default Todos;