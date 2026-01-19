const createArrayWithGeneric = <T>(param:T): T[] => {
    return [param]
}

const res1 = createArrayWithGeneric<string>("Bangladesh")

type User = {
    id: number;
    name: string
}

const resGeneric = createArrayWithGeneric<User>({id:1, name:"Kabir"})


const createArrayWithGenericTuple = <T, Q>(param1:T, param2:Q): [T,Q] => {
    return [param1, param2]
}

const res2 =  createArrayWithGenericTuple<string, number> ("Bangladesh", 222)
const res3 =  createArrayWithGenericTuple<string, object> ("Bangladesh", {name:"Mohsin", age:30})


const addCourseToStudent = <T>(student:T)=> {
    let course = "Next Level Web Development"

    return {
        ...student,
        course
    }

}


const student1 = addCourseToStudent <{name:string, hasWatch:string}>({name: "Mohsin", hasWatch:"Apple"})
const student2 = addCourseToStudent ({name: "Kabir", hasMobile:"Huawei"})