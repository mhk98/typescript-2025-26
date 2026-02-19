// Details class and object

class Animal1 {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}


const dog = new Animal1("German Shepard Bhai", "dog", "Ghew Ghew")

dog.name  // dog instance

dog.makeSound()


// Simple class and object

class Animal2 {
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string,public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}


const cat = new Animal2("German Shepard Bhai", "dog", "Ghew Ghew")

cat.name  // dog instance

cat.makeSound()