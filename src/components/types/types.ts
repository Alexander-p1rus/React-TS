export interface Address {
    street: string,
    city: string,
    zipcode: string
}

export interface User {
    id: number,
    username: string,
    name: string
    address: Address
}

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}