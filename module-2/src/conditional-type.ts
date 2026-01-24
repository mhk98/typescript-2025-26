type a1 = number
type b1 = undefined 

type x = a1 extends null ? true : false

type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


type Sheikh = {
    bike: string;
    car: string;
    ship: string
}


// keyof Sheikh "bike" | "car" | "ship"

//car ase kina / bike ase kina/ ship ase ki na
type CheckVehicle<T> = T extends keyof Sheikh ? true : false

type hasCar = CheckVehicle<"car">