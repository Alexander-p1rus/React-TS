import React, {useEffect, useRef, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {Todo, User} from "./components/types/types";
import UserList from "./components/UserList";
import {fetchTodo, fetchUsers} from "./service/users.service";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoList from "./components/TodoList";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from 'react-router-dom';
import UserItemPage from "./components/UserItemPage";

function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to='/users' style={{marginRight:40}}>Пользователи</NavLink>
                <NavLink to='/todos'>список дел</NavLink>
            </div>
            <Routes>
                <Route path='/users' element={<UserPage/>}/>
                <Route path='/todos' element={<TodosPage/>}/>
                <Route path='/users/:id' element={<UserItemPage/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
