import React, {FC, useEffect, useState} from 'react';
import {User} from "./types/types";
import {fetchUserById, fetchUsers} from "../service/users.service";
import {useNavigate, useParams} from "react-router-dom";

type UserItemPageParams={
    id:string
}

const UserItemPage:FC = () => {
    const [user, setUser] = useState<User>()
    const params=useParams<UserItemPageParams>()
    const navigate=useNavigate()

    useEffect(() => {
        async function fetchData() {
            const user = await fetchUserById(params.id!)
            setUser(user)
        }

        fetchData()
    }, [])

    return (
        <div>
            <button onClick={()=>navigate('/users')}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                играет под ником {user?.username} <br/>
                живет в городе {user?.address.city} <br/>
                другая информация {user?.address.zipcode},{user?.address.street}
            </div>
        </div>
    );
};

export default UserItemPage