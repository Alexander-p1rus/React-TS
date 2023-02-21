import React, {FC} from 'react';
import {Todo} from "./types/types";

interface TodoListProps {
    todo:Todo
}

const TodoList:FC<TodoListProps> = ({todo}) => {
    const {id,title,completed} = todo
    return (
        <div>
            <input type="checkbox" checked={completed}/>
            {id}.{title}
        </div>
    );
}

export default TodoList;