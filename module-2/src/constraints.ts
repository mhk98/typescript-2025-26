const addCourseToStudent = <T extends {id: number, name: string, email: string,}>(student:T)=> {
    let course = "Next Level Web Development"

    return {
        ...student,
        course
    }

}


const student1 = addCourseToStudent ({id: 111, name: "Mohsin", email: "abc@gmail.com", hasWatch:"Apple"})
const student2 = addCourseToStudent ({name: "Kabir", id:222, email:"dbc@gmail.com", hasMobile:"Huawei"})