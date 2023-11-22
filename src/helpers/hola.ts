interface User  {
    name: string,
    age: number
}

export const user: User = {
    name:"Juan",
    age: 55
}

export const getUser = () => {
    return user;
}