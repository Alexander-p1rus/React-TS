import {Todo, User} from "../components/types/types";


export async function fetchUsers():Promise<User[]>{
    try {
        let users= await fetch(`https://jsonplaceholder.typicode.com/users/`)
        return users.json()
    }catch (e){
        throw new Error('error')
    }
}

export async function fetchUserById(id:string):Promise<User>{
    try {
        let users= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return users.json()
    }catch (e){
        throw new Error('error')
    }
}

export async function fetchTodo():Promise<Todo[]>{
    try {
        let todo= await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
        return todo.json()
    }catch (e){
        throw new Error('error')
    }
}

