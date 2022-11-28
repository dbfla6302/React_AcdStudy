import React from 'react';
import ItemUser from './ItemUser';

const ListUser = ({ data }) => {
    return (
        <div>
            <h2 className="users">작은 아씨들 출연진 명단</h2>
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                </colgroup>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        map.data( item => <ItemUser key={item.id} data={data} /> )
                    }
                    <ItemUser data={data} />
                </tbody>
            </table>
        </div>
    );
};

export default ListUser;