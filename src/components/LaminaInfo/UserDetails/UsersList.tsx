import React, { FC, useContext } from 'react';
import { LaminaContext } from '../../hooks/context/LaminaProvider';
import { Stock } from '../../types/Stock';
import { UsersRow } from './UsersRow';

export const UsersList: FC = () => {
    const {users} = useContext(LaminaContext);
    const loadUsers = users.map(s => <UsersRow user={s} />)
    return <table width="100%">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Gender</td>
            <td>Birth Date</td>
            <td>E-Mail</td>
            <td>Phone#</td>
            <td>Role</td>
            <td>Address</td>
            <td>Active</td>
        </tr>
        {loadUsers}
    </table>
}