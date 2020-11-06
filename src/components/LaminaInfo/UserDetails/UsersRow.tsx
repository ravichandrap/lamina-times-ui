import React, { FC } from 'react';
import { Stock } from '../../types/Stock';
import { User } from '../../types/User';

export const UsersRow: FC<{ user: User }> = ({ user }) => {
    return <tr key={user.id} >
        <td>{user.id}</td>
        <td >{user.firstName+', '+user.lastName}</td>
        <td >{user.gender}</td>
        <td >{user.dateOfBirth}</td>
        <td >{user.email}</td>
        <td> {user.phoneNumber}</td>
        <td >{user.role}</td>
        <td >{user.address}</td>
        <td >{user.active}</td>
    </tr>
}
