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


// type AreaString = {
//     height: string;
//     width: string;
// }


type AreaString = {
   [ key in keyof AreaNumber]: string
}
