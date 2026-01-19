type Vehicle = {
    bike: string,
    car: string,
    ship: string,
}

type Owner = "bike" | "car" | "ship"

type Owner2 = keyof Vehicle


// const user = {
//     name: 'Mr. Kabir',
//     age: 26,
//     address: 'ctg'
// }

// user ['age']  // 26


const getPropertyValue =<x, y extends keyof x> (obj:x, key:y) => {

    return obj[key]
}


const user = {
    name: "Mohsin Kabir",
    age: 26,
    address: "ctg"
}

const result = getPropertyValue(user, "name")