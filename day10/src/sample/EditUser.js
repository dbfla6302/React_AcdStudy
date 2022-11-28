import React from 'react';

const EditUser = () => {
    return (
        <form>
            <h2> 작은아씨들 출연진 수정 </h2>
            <p>
                <label htmlFor="">이름</label>
                <input type="text" />
            </p> 
            <p>
                <label htmlFor="">주소</label>
                <input type="text" />
            </p> 
            <p>
                <button type="submit">수정</button>
                <button>취소</button>
            </p> 
        </form>
    );
};

export default EditUser;