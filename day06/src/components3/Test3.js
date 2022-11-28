import React, { useRef, useState } from 'react';

const Test3 = () => {
    const [ data , setData ] = useState([])
    const [ text , setText ] = useState('')
    const no = useRef(1)
    const textRef = useRef(null)

    const changeInput = (e) => {
        const { value } = e.target
        setText( value )
    }
    const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++ , 
                text : text
            }
        ])
        setText('')
        textRef.current.focus()
    }

    return (
        <div>
            <p>
                <input type="text" value={text} onChange={changeInput} ref={textRef} />
                <button onClick={onAdd}>입력</button>
            </p>
            <hr />
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.text}</li> )
                }
            </ul>
        </div>
    );
};

export default Test3;