import React from 'react';

const ItemUser = ({data}) => {
    const { id, text , addr } = data
    return (
        <tr>
            <td>{text}</td>
            <td>{addr}</td>
            <td>
                <button>수정</button>
                <button>삭제</button>
            </td>
        </tr>
    );
};

export default ItemUser;