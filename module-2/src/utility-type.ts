type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string
}


//Pick
type NameAge = Pick<Person, "name" | "age">

//Omit
type ContactInfo = Omit<Person, "name" | "age">

//Required
type PersonRequired = Required<Person>

//Partial
type PersonPartial = Partial<Person>


//Readonly
type PersonReadonly = Readonly<Person>

const person1: PersonReadonly = {
    name: "Mohsin Kabir",
    age: 30,
    contactNo: "01518301098"
}


type MyObj = Record<string, unknown>

// R dynamic vabe key ar value dit cayle
const EmptyObj: Record<string, unknown> = {}

const obj1: MyObj = {
    name:"Mohsin Kabir",
    age: 30
}