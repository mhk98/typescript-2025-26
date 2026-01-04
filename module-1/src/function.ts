//normal function
function add (num1: number, num2: number): number {
    return num1+num2
}

add (2,2)


//arrow function
const arrowNum = (num1:number, num2:number): number => {
    return num1+num2
}


//callback funciton
const arr = [1,2,5,7]

const newArray = arr.map((elem:number) => elem*elem)


const person: {

    name: string,
    balance: number,
    addBalance(money: number):string
} = {
    name: "Kabir",
    balance: 45,
    addBalance(money: number) {
        return `My new balance is ${this.balance + money}`
    }
}


//Default parameter not good for first parameter. We should use it for last parameter
function defaultValue (num1: number, num2: number = 10): number {
    return num1+num2
}

defaultValue (2,2)


// spread operator
const myFriends: string[] = ["rafi", "jamal", "kamal"]
const newFriends: string[] = ["abir", "nabir"]

myFriends.push(...newFriends)

console.log(myFriends)


//Rest parameter
const greetFriends = (...friends: string[]) => friends.forEach((friend => console.log(friend)))

greetFriends("Hasem", "gashem", "lashem")

const myBestFriend = {
    name: "jamal",
    age: 23,
    address: "kolabagan"
}
const {name,age } = myBestFriend;