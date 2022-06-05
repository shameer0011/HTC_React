import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const UserInfo = () => {
    const { id } = useParams();
    const { users } = useSelector(state => state.data);
    const user = users.data.find(user => user.id === Number(id));
    return (
        <div>
            <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.id}</p>
            </div>
        </div>
    )
}
export default UserInfo