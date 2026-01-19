//Normal
const rollNumbers1: number[] = [2,8,6,7]
const mentors1: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
const booleanArray1: boolean[] = [true, false, true]


// Generic Type
type GenericNumberArray = number[]
type GenericStringArray = string[]
type GenericBooleanArray = boolean[]

const rollNumbers2: GenericNumberArray = [2,8,6,7]
const mentors2: GenericStringArray = ['Mr. X', 'Mr. Y', 'Mr. Z']
const booleanArray2: GenericBooleanArray = [true, false, true]


// Generic Type Dynamic
type GenericArray<T> = Array<T>
const rollNumbers3: GenericArray<number> = [2,8,6,7]
const mentors3: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']
const booleanArray3: GenericArray<boolean> = [true, false, true]


const user: GenericArray<{name:string, age: number}> = [
    {
        name: 'Mezba',
        age:100
    },
    {
        name:"Mohsin Kabir",
        age: 110
    }
]


//Generic tuple
type GenericTuple <X,Y>= [X, Y]

const manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y']

const UserWithID: GenericTuple<number, {name: string, email:string}> = [
    1234,
    {
        name: 'Mohsin Kabir', email:'mohsin@gmail.com'
    }
]