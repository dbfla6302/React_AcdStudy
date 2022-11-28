import { useRef, useState } from "react";

const FriendInput = ({ onAdd }) => {
    const nameRef = useRef(null)
    const [ obj , setObj ] = useState({
        name:'' , age:'' , image:''
    })
    const { name , age , image } = obj

    const changeInput = (e) => {
        const { value , name } = e.target
        setObj({
            ...obj,
            [name] : value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        // onAdd( name , age , image )
        if( !name || !age || !image) return
        onAdd( obj )
        setObj({
            name:'' , age:'' , image:''
        })
        nameRef.current.focus()
    }
    return (
        <form className="formadd" onSubmit={onSubmit}>
            <p><label htmlFor="">이름 </label><input type="text" value={name} name="name" onChange={changeInput} ref={nameRef} /></p>
            <p><label htmlFor="">나이 </label><input type="text" value={age} name="age" onChange={changeInput} /></p>
            <p><label htmlFor="">사진 </label><input type="text" value={image} name="image" onChange={changeInput} /></p>
            <p><button type="submit">추가</button></p>
        </form>
    );
};

export default FriendInput;