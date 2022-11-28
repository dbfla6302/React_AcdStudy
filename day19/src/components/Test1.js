import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useAxios } from '../hooks/useAxios';

const Test1 = () => {
    const { data  , error  , loading } = useFetch('https://jsonplaceholder.typicode.com/todoss')
    // const { data  , error  , loading } = useAxios('https://jsonplaceholder.typicode.com/todos')
    return (
        <div>
            <h1>Todos data List</h1>
            {
                !loading && <h2>Loading...</h2>
            }
            {
                data && loading && data.map( item => <p key={item.id}>{item.id} / {item.title}</p> )
            }
            <h3>
                {error ? error : null}
            </h3>
        </div>
    );
};

export default Test1;
/* 
Fetch는 오류나면 안나옴.. 그래서 강제로 if문 등으로 강제로 중간에 에러체크 함
그래서 Axios를 많이 씀
*/