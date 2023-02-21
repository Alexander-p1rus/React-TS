import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {Todo, User} from "./components/types/types";
import UserList from "./components/UserList";
import {fetchTodo, fetchUsers} from "./service/users.service";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoList from "./components/TodoList";

function App() {
    const [users, setUsers] = useState<User[]>([])
    const [todos, setTodo] = useState<Todo[]>([])

    useEffect(() => {
        async function fetchData() {
            const users = await fetchUsers()
            const todos = await fetchTodo()
            setUsers(users)
            setTodo(todos)
        }


        fetchData()
    }, [])

    return (
        <div className="App">
            <Card width='200px' height='200px' variant={CardVariant.PRIMARY} onClick={(num) => console.log(num)}>
                <button>Press</button>
            </Card>
            <List
                items={users}
                renderItem={(user) => <UserItem user={user} key={user.id}/>}
            />
            <List
                items={todos}
                renderItem={(todo) => <TodoList key={todo.id} todo={todo} />}
            />

        </div>
    );
}

export default App;
