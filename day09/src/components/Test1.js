import React, { useRef, useState } from 'react';

const Test1 = () => {
    const no = useRef(1)
    const idRef = useRef(null)
    const [ data , setData ] = useState([])
    const [ obj , setObj ] = useState({
        userid:'' ,
        pw:''
    })
    // { id:1, userid:xxx, pw:xxx }
    const { userid , pw } = obj

    const changeInput = (e) => {
        const { value , name } = e.target
        setObj({
            ...obj,
            [name]:value
        })
    }
    const onAdd = (e) => {
        e.preventDefault()
        if( !userid || !pw){
            return
        }

        /*if( userid.length === 0 || pw.length === 0){
            return
        } */
        
        setData([
            ...data,
            {
                id: no.current++,
                userid: userid,
                pw: pw
            }
        ])
        setObj({
            userid: '',
            pw: ''
        })
        idRef.current.focus()
    }

    return (
        <div style={{margin:30}}>
            <form onSubmit={onAdd}>
                <input type="text" name="userid" value={userid} onChange={changeInput} ref={idRef} />
                <input type="text" name="pw" value={pw} onChange={changeInput} />
                <button type="submit">추가</button>
            </form>
            <hr />
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.userid} / {item.pw}</li> )
                }
            </ul>
        </div>
    );
};

export default Test1;