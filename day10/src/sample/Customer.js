import React, { useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import './style.css';

const dataList = [
    {id:1, text:'김고은', addr:'서울'},
    {id:2, text:'남지현', addr:'제주도'},
    {id:3, text:'박지후', addr:'울산'},
    {id:4, text:'위하준', addr:'부산'},
    {id:5, text:'강훈', addr:'전주'},
]
const Customer = () => {
    const [ data , setData ] = useState( dataList )
    return (
        <div className="Customer">
            <AddUser />
            {/* <EditUser /> */}
            <ListUser data={data} />
        </div>
    );
};

export default Customer;