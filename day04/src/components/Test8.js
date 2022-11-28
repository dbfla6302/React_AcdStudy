import React, { useRef, useState } from 'react';

const Test8 = () => {
    const idRef = useRef()
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const changeInput1 = (e) => {
        setUserid( e.target.value )
    }
    const changeInput2 = (e) => {
        const { value } = e.target
        setUserpw( value )
    }
    const onReset = () => {
        setUserid('')
        setUserpw('')
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" onChange={ changeInput1 } value={userid} ref={idRef} />
            <input type="text" onChange={ changeInput2 } value={userpw} />
            <button onClick={ onReset }>초기화</button>
            <hr/>
            <h4>{ userid }</h4>
            <h4>{ userpw }</h4>
        </div>
    );
};

export default Test8;