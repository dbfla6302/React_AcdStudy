import FriendInput from './FriendInput';
import FriendList from './FriendList';
import dataList from '../assets/friendData';
import './style.css';
import { useRef, useState } from 'react';

const Friend = () => {
    const [ data , setData ] = useState( dataList )
    const [ isChk , setIsChk ] = useState( true )
    const no = useRef( dataList.length + 1 )

    // 삭제
    const onDel = ( id ) => {
        setData( data.filter( item => item.id !== id ) )
    }
    // 모두삭제
    const onBtn1 = () => {
        setData( [] )
    }
    // 초기복구
    const onBtn2 = () => {
        setData( dataList )
    }
    const changeInput = (e) => {
        const { checked } = e.target
        setIsChk( checked )
    }

    // 추가
    const onAdd = ( obj ) => {
        obj.id = no.current++
        setData([
            ...data,
            obj
        ])
    }
    return (
        <div className="wrap">
            <h1> 친구들 총인원 : {data.length} </h1>
            <p className="chk">
                <input type="checkbox" id="check" onChange={changeInput} checked={isChk} />
                <label htmlFor="check">
                    {
                        isChk ? "추가 비활성" : "추가 활성"
                    }
                </label>
            </p>

            <FriendList data={data} onDel={onDel} />
            
            <p className="btn">
                <button onClick={onBtn1}>모두삭제</button>
                <button onClick={onBtn2}>초기복구</button>
            </p>

            {
                isChk && <FriendInput onAdd={onAdd} />
            }

        </div>
    );
};

export default Friend;