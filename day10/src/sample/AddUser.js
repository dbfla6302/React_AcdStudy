import React from 'react';

const AddUser = () => {
    return (
        <form>
            <h2> 작은아씨들 출연진 추가 </h2>
            <p>
                <label htmlFor="">이름</label>
                <input type="text" />
            </p> 
            <p>
                <label htmlFor="">주소</label>
                <input type="text" />
            </p> 
            <p>
                <button type="submit">추가</button>
            </p> 
        </form>
    );
};

export default AddUser;