const age = 25

if(age >= 18) {
    console.log("Yes")
} else {
    console.log("No")
}

const isAdult = age >= 18 ? "Yes" : "No"

console.log(isAdult)


// Nullish Coalescing Operator (??)
const getUserName = (name: string | null) => {
    const userName = name ?? "Guest"
    console.log(`Hello, ${userName}`)
}

getUserName("Alice")
getUserName(null)