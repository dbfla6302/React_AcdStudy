import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from '../../store/modules/post';

const Users = () => {
    const dispatch = useDispatch();
    const { users, isLoading, status } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getData());
      }, [dispatch]);

    return (
        <div>
            <h2>Users List </h2>
            <h2>
                { status ? status : null }
            </h2>
            {
                isLoading && <h2>Loading... </h2>
            }
            {users && users.map((user, i) => <p key={i}>{user.name}</p>)}
            
        </div>
    );
};

export default Users;
 