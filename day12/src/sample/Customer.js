import React, { useRef, useState } from 'react';
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
    const [ data , setData ] = useState( dataList )
    const [ isEdit , setIsEdit ] = useState( false )
    const [ current , setCurrent ] = useState({})

    const no = useRef( dataList.length  + 1 )
    
    //삭제
    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id ))
    }
    //추가
    const onAdd = ( obj )  => {
        obj.id = no.current++
        setData([
            ...data ,
            obj
        ])
    }

    //수정
    const onEdit  = ( obj )  => {
        setIsEdit( true )
        setCurrent( obj )
    }

    //갱신
    const onUpDate = (obj) => {
        setData( data.map( item => item.id === obj.id ? obj :item ))
        setIsEdit( false )
    }


    return (
        <div className="Customer">
            {/* <Message /> */}
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