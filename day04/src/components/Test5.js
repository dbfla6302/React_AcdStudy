import React, { useState } from 'react';
import dataList from "../assets/api/tableData";
import './Test5.css';

// useState 값이 유동으로 변경할때
// const dataList = [
//     {id:1, name:'최우식', age:20, addr:'서울', done:true},
//     {id:2, name:'김다미', age:22, addr:'제주', done:true},
//     {id:3, name:'노의정', age:18, addr:'부산', done:true},
//     {id:4, name:'박진주', age:24, addr:'전주', done:false},
//     {id:5, name:'전혜원', age:25, addr:'경남', done:false}
// ]
const Test5 = () => {
    const [data, setData] = useState(dataList)

    return (
        <table className="list">
            <caption>그해우리는</caption>
            <colgroup>
                <col className="num" />
                <col className="name" />
                <col className="age" />
                <col className="addr" />
                <col className="consent" />
            </colgroup>

            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                    <th>동의여부</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map( item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.addr}</td>
                        <td>{item.done ? '동의':'비동의'}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    );
};

export default Test5;