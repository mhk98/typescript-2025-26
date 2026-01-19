let emni:any 

emni = "Level 2 Web Development Course";

(emni as string).length

function kgToGram (params: number | string): string | number | undefined{
    if(typeof params === "string") {
        const value = parseFloat(params)*1000;
        return `The converted value is ${value} gram`
    }

    if(typeof params === "number") {
        const value = params*1000;
        return `The converted value is ${value} gram`
    }
} 

const resultToBeNumber = kgToGram(1000) as number
const resultToBeString = kgToGram(1000) as string

console.log(resultToBeNumber)
console.log(resultToBeString)
