

interface Human  {
    name: string,
    age: number,
    country: string
}

interface Vehicle  {
    doors: number,
    automatic: boolean
}

interface Animal  {
    type: string,
    age: number
}


const Objeto: Human|Vehicle|Animal = {
    doors:4,
    automatic: true
}

console.log(Objeto);