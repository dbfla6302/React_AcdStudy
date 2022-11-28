import React, { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css'

const dataList = [
    {id:1, text:'김고은', addr:'서울'},
    {id:2, text:'남지현', addr:'제주'},
    {id:3, text:'박지후', addr:'울산'},
    {id:4, text:'위하준', addr:'부산'},
    {id:5, text:'강훈', addr:'전주'},
]

const Customer = () => {
    const [ data , setData ] = useState( 
        () => JSON.parse( localStorage.getItem('data') ) || dataList 
    )
    const [ isEdit , setIsEdit ] = useState( false )
    const [ current , setCurrent ] = useState({})

    const [ msg , setMsg ] = useState('아무내용')
    const [ isShow , setIsShow ] = useState(false)


    const no = useRef( dataList.length  + 1 )
    
    //삭제
    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id ))
        setMsg('명단을 삭제했습니다.')
        setIsShow( true )
    }
    //추가
    const onAdd = ( obj )  => {
        obj.id = no.current++
        setData([
            ...data ,
            obj
        ])
        setMsg('명단을 추가했습니다.')
        setIsShow( true )
    }

    //수정
    const onEdit  = ( obj )  => {
        setIsEdit( true )
        setCurrent( obj )
        setMsg('명단을 수정했습니다.')
        setIsShow( true )
    }

    //갱신
    const onUpDate = (obj) => {
        setData( data.map( item => item.id === obj.id ? obj :item ))
        setIsEdit( false )
        setMsg('명단을 업데이트했습니다.')
        setIsShow( true )
    }


    useEffect( () => {
        localStorage.setItem('data', JSON.stringify( data ))
    },[data])



    return (
        <div className="Customer">
            <Message msg={msg} isShow={isShow} setIsShow={setIsShow} />
            {
                isEdit ? <EditUser current={current} onUpDate={onUpDate} setIsEdit={setIsEdit} /> 
                :
                <AddUser onAdd={onAdd} />
            }
 
            <ListUser data={data} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;