type NoobDeveloper = {
    name: string
}


// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Nurun Nahar",
    expertise: "JavaScript",
    experience: 1,
    
}

enum Level {
    junior = "Junior",
    mid = "Mid",
    senior = "Senior"
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: Level
}


const developer: NextLevelDeveloper = {
    name: "Kabir",
    expertise: "React",
    experience: 2,
    leadershipExperience: 1,
    level: Level.mid

}