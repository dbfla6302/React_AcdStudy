import React, { useEffect, useState } from 'react';

const EditUser = ({ current , onUpDate, setIsEdit  }) => {
    const [ obj , setObj ] = useState( current )
    const { text , addr } = obj 

    useEffect( () => {
        setObj( current )
    },[current])


    const changeInput = e  => {
        const { value , name } = e.target 
        setObj({
            ...obj ,
            [name] :value
        })
    }

    const onSubmit = (e)  => {
        e.preventDefault();
        if(!text || !addr) return
        onUpDate( obj )
    }


    return (
        <form onSubmit={onSubmit}>
            <h2> 작은아씨들 출연진 수정 </h2>
            <p>
                <label>이름</label>
                <input type="text" value={ text } name="text" onChange={changeInput}/>
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={ addr } name="addr" onChange={changeInput}/>
            </p>
            <p>
                <button type="submit">수정</button>
                <button onClick={ () => setIsEdit(false)}>취소</button>
            </p>            
        </form>
    );
};

export default EditUser;