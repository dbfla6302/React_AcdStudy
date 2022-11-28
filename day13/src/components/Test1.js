import React, { useEffect, useRef, useState } from 'react';

const Test1 = () => {
    const no = useRef(1)
    const [data ,setData] = useState(
        () => JSON.parse( localStorage.getItem('data') ) || []
    )
    //{ id:1, text:xxx }
    const [text ,setText] = useState('')

    const [ count , setCount ] = useState(
        () => JSON.parse( localStorage.getItem('count') ) || 0 
    )

    const incrememt = ()  => {
        setCount( count + 1 )
    }
    const decrememt = ()  => {
        setCount( count - 1 )
    }
    const onDel = ()  => {
        localStorage.removeItem('count')
    }
    const onRemove = ()  => {
        localStorage.clear()
    }

    const chageInput = (e) => {
        const { value } = e.target 
        setText( value )
    }
    const onAdd  = ()  => {
        setData([ ...data , { id:no.current++ , text } ])
        setText('')
    }
    const onClear = ( id  ) => {
        setData( data.filter( item  => item.id !== id ))
    }


    useEffect( () => {
        localStorage.setItem('count', JSON.stringify( count ))
    },[count])
   
    useEffect( () => {
        localStorage.setItem('data', JSON.stringify( data ))
    },[data])

    return (
        <div>
            <h1> 카운트 : { count } </h1>
            <p>
                <button onClick={incrememt}>증가</button>
                <button onClick={decrememt}>감소</button>
                <button onClick={ onDel }>삭제</button>
                <button onClick={ onRemove }>모두삭제</button>
            </p>
            <hr/>
            <p>
                <input type="text" value={text} onChange={chageInput}/>
                <button onClick={ onAdd }>추가</button>
            </p>
            <ul>
            {
            data.map( item=><li key={item.id}>
                    {item.id} / {item.text}
                    <button onClick={() => onClear(item.id)}>삭제</button>
                </li>	
            )}
            </ul>
        </div>
    );
};

export default Test1;