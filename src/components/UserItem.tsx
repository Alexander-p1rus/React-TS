import React, {FC} from 'react';
import {User} from "./types/types";

interface UserItemProps{
    user:User
}

const UserItem:FC<UserItemProps> = ({user}) => {
    const {name,username,address:{street,city,zipcode}} = user

    return (
        <div style={{border:'2px solid blue', padding:20,background:'gray'}}>
           Меня зовут {name} играю под ником {username} живу в городе {city} на улице {street}
        </div>
    );
};

export default UserItem;