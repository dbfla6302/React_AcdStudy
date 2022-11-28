import React from 'react';

const Test7 = () => {
    const handleClick1 = () => {
        alert('test')
    }
    const handleClick2 = () => {
        alert('test1')
    }
    const handleClick3 = () => {
        alert('test2')
    }
    const make = ( num ) => {
        alert(num)
    }

    return (
        <div>
           <p>
                <button onClick={handleClick1}>이벤트</button>
                <button onClick={handleClick2}>이벤트</button>
                <button onClick={handleClick3}>이벤트</button>
            </p> 
            <p>
                <button onClick={() => {
                    alert('test')
                }}>이벤트</button>
                <button onClick={ () => alert('test1') }>이벤트</button>
                <button onClick={() => {
                    alert('test2')
                    alert('test2')
                    alert('test2')
                    alert('여러줄일때 {}')
                }}>이벤트</button>
            </p>
            <p>
                {/* make / make() 무조건 실행 
                    값이 있을 땐 아래처럼 써야함
                    함수로 묶어준다
                    () => 함수명(값)
                */}
                <button onClick={ () => make(100) }>값전달</button>
            </p>
        </div>
    );
};

export default Test7;