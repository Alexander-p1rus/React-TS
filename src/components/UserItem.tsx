import React, {FC} from 'react';
import {User} from "./types/types";

interface UserItemProps{
    user:User
    onClick:(user:User)=>void
}

const UserItem:FC<UserItemProps> = ({user,onClick}) => {
    const {name,username,address:{street,city,zipcode}} = user

    return (
        <div onClick={()=>onClick(user)} style={{border:'2px solid blue', padding:20}}>
           Меня зовут {name} играю под ником {username} живу в городе {city} на улице {street}
        </div>
    );
};

export default UserItem;