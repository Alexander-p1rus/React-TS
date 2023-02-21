import React, {FC, useEffect, useState} from 'react';
import {Todo, User} from "./types/types";
import {fetchTodo, fetchUsers} from "../service/users.service";
import List from "./List";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

const UserPage:FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const navigate=useNavigate()

    useEffect(() => {
        async function fetchData() {
            const users = await fetchUsers()
            setUsers(users)
        }

        fetchData()
    }, [])

    return (
            <List
                items={users}
                renderItem={(user) => <UserItem onClick={()=>navigate(`/users/${user.id}`)} user={user} key={user.id}/>}
            />
    );
};

export default UserPage