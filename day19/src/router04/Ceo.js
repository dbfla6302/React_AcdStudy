import React from 'react';
import { useParams } from 'react-router-dom';
import dataList from './data';

const Ceo = () => {
    // const { 사용자정의변수 } = useParams()
    const { name } = useParams()
    return (
        <div>
            <h1>Ceo page : {name}</h1>
            <hr />
            {
                dataList.filter( item => item.title === name)
                .map( (item, idx) => <div key={idx}>
                    <h2>{item.title}</h2>
                    <h3>{item.info}</h3>
                </div>)
            }
        </div>
    );
};

export default Ceo;