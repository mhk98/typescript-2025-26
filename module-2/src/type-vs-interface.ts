type User = {
    name: string;
    age: number
}

interface IUser {
    name: string;
    age: number
}

interface IExtendedUser extends IUser {
    role: string
}

const userDetails: IExtendedUser = {
    name: "John",
    age: 30,
    role: "Developer"
}


// type
type addNumbersType = (num1: number, num2: number) => number

// interface
interface IAddNumbers {
    (num1: number, num2: number): number
}

const addNumbersType: addNumbersType = (num1, num2) => num1 + num2
const addNumbersInterface: IAddNumbers = (num1, num2) => num1 + num2


// type
type rollNumberType = number []

// interface
interface IRollNumber {
    [index: number]: number
}

const rollNumber1:rollNumberType = [2, 5, 8, 12, 16]
const rollNumber2:IRollNumber = [2, 5, 8, 12, 16]