import React, {FC, useEffect, useState} from 'react';
import {Todo, User} from "./types/types";
import {fetchTodo, fetchUsers} from "../service/users.service";
import TodoList from "./TodoList";
import List from "./List";

const TodosPage:FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        async function fetchData() {
            const todos = await fetchTodo()
            setTodos(todos)
        }

        fetchData()
    }, [])

    return (
            <List
                items={todos}
                renderItem={(todo) => <TodoList key={todo.id} todo={todo}/>}
            />
    );
};

export default TodosPage