import React from 'react';

const Test1 = () => {
    // 함수 영역
    const arr = ['김철수','김태리','김다미','이수영','송혜교']
    const data = [
        {id:1, name:'김철수'},
        {id:2, name:'김태리'},
        {id:3, name:'김다미'},
        {id:4, name:'이수영'},
        {id:5, name:'송혜교'}
    ]
    return (
        <div>
            <h2>map + key</h2>
            <ul>
                {
                    arr.map( (item, index) => {
                        return <li key={index}>{index} / {item}</li>
                    })
                }
            </ul>
            <hr/>
            <ul>
                {
                    arr.map( (item, index) => <li key={index}>{index} / {item}</li>)
                }
            </ul>
            <hr/>
            <ul>
                {
                    data.map( (item, index) => {
                        return <li key={index}>{item.id} / {item.name}</li>
                    })
                }
            </ul>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test1;

/*
    Array.map( (현재값, 인덱스) => {
        return 반환값
    })

    Array.map( (현재값, 인덱스) => 반환값 )

    jsx map 출력할 경우
    key 반드시 작성
    고유값, 식별 - 수정,삭제,추가 처리속도가 빠르다
    주민번호 ? : 중복되면 안됨 ( 고유값 )
    key = 숫자, 문자

    단, 수정,삭제,추가 할 경우 index 추천하지 않는다

    index는 단순히 출력만 할 경우 사용한다
*/