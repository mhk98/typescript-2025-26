//mapped types

const arrowOfNumbers: number[] = [1,4,6]

// const arrayOfString: string[] = ["hello", "world"]


const arrOfString: string[] = arrowOfNumbers.map((number)=>
number.toString()

)

console.log(arrOfString)


type AreaNumber = {
    height: number;
    width: number;
}

type Height = AreaNumber["height"]   // look up type

// type AreaString = {
//     height: string;
//     width: string;
// }


// type AreaString = {
//    [ key in keyof AreaNumber]: string
// }


//key => T["width"]
type AreaString<T> = {
   [ key in keyof T]: T[key]
}

const area1: AreaString<{height: string; width: number}> = {
    height: "100",
    width: 200
}