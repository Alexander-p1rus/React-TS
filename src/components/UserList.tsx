import React, {FC} from 'react';
import {User} from "./types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users:User[]

}

const UserList:FC<UserListProps> = ({users,}) => {
    return (
        <div>
            {users.map(user=>(
                <UserItem key={user.id} onClick={()=>{}} user={user}/>
            ))}
        </div>
    );
};

export default UserList;