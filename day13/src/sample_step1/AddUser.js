import React, { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
    const [ obj , setObj ] = useState({
        text:'', addr:'' 
    })
    const textRef = useRef(null)

    const { text , addr } = obj 

    const changeInput = (e) => {
        const { value, name } = e.target 
        setObj({
            ...obj ,
            [name] : value 
        })
    }

    const onSubmit = (e) => {
        e.preventDefault() 
        if( !text || !addr ) return 
        onAdd( obj )
        setObj({
            text:'',
            addr:''
        })
        textRef.current.focus()
    }


    return (
        <form onSubmit={ onSubmit }>
            <h2> 작은아씨들 출연진 추가 </h2>
            <p>
                <label>이름</label>
                <input type="text" value={text} name="text" onChange={ changeInput } ref={ textRef }/>
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={ changeInput }/>
            </p>
            <p>
                <button type="submit">추가</button>
            </p>            
        </form>
    );
};

export default AddUser;