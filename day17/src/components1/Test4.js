import React, { useEffect, useMemo, useState } from 'react';

const user = [
    {id:1, text:'다음'},
    {id:2, text:'김고은'},
    {id:3, text:'daum nate'},
    {id:4, text:'NATE'},
    {id:5, text:'NaVER'},
    {id:6, text:'naver'},
    {id:7, text:'good'},
    {id:8, text:'GOOd'},
    {id:9, text:'강호동'},
    {id:10, text:'김태리는 운동을 하다'},
    {id:11, text:'김고은은 연기를 하다'},
    {id:12, text:'네이버 뉴스 진행'},
    {id:13, text:'드라마를 주말에 봅니다.'},
]
// 초성 sql

const Test4 = () => {
    // const [ data , setData ] = useState( user )
    const [ text , setText ] = useState('')

    // js - indexOf / useMemo는 return 값을 기억함
    const data = useMemo( () => {
        return user.filter( item => item.text.toLowerCase().includes(text.toLowerCase()) )
    },[text])

    return (
        <div>
            <p>
                <input type="text" value={text} onChange={ e => setText(e.target.value) } />
            </p>
            <hr />
            <ul>
                { data.map( item => <li key={item.id}>{item.id} / {item.text}</li> ) }
            </ul>
        </div>
    );
};

export default Test4;