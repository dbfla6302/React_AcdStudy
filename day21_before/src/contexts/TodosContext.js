import React, { createContext, useRef, useState } from 'react';

export const TodosContext = createContext()

const dataList = [
    {id:1, text:'운동하기', isChk:false},
    {id:2, text:'수영하기', isChk:true},
    {id:3, text:'친구만나기', isChk:false},
    {id:4, text:'회사미팅', isChk:true},
    {id:5, text:'운전하기', isChk:false},
]
    const TodosProvider = ( props ) => {
    const [ data, setData ] = useState( dataList )
    const [ text, setText ] = useState('')
    const no = useRef( data.length + 1 )

    // 글자변경
    const changeInput = (e) => {
        const { value } = e.target
        setText(value)
    }
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ) )
    }
    const onToggle = (id) => {
        setData( data.map( item => item.id === id ? {...item , isChk: !item.isChk } : item ))
    }
    // 추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text,
                isChk: false
            }
        ])
        setText('')
    }

    return (
        <TodosContext.Provider value={{ data, onDel, onToggle, text, changeInput , onAdd }}>
            { props.children }
        </TodosContext.Provider>
    );
};

export default TodosProvider;