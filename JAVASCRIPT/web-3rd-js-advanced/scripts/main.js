


// // We can create objects manually like this, but when we want another example of a dog object.
// const dog1 = {
//     breed: "rotweiler",
//     color: "black",
//     age: 5,
//     vaccinated: true,
//     siblingCount: 2
// }

// // as we can see here, creating a new object by hand is a little bit time consuming. So, just like functions we can standardize the creation process of an object. (As like how we standardized 20 lines of code to be ran in a function, so we don't have to write everything again by hand.)

// const dog2 = {
//     breed: "rotweiler",
//     color: "black",
//     age: 5,
//     vaccinated: true,
//     siblingCount: 2
// }

// // ------------------ CLASS -------------------

// // What is a Class in JavaScript?

// // A class is like a cooking mold that defines how an object will look like, and it allows you to create objects as much as you want.


// // we usually define classes by using the class keyword and we use PascalCase(every word's first letter is capital) for defining a classname

// class Person {
//     // static field, cannot be changed from the start
//     name = "Anela"

//     greet() {
//         console.log("Hello, I am Anela.")
//     }
// }

// // Above, we only defined what our class should look like but we never used it, so we don't actually have any objects with the class of Person.

// // So we should create it

// const human = new Person();

// // console.log("Human's name: ", human.name)



// // --------------------- Creating Classes with Parameters

// // Not all humans have the same name or age or anything exactly the same. So we need some diversity and we can achieve this by using a built-in function called constructor


// class Animal {

//     // we can call constructor and give it the properties that we want to set during the creation of the object

//     constructor(color, species, sound, dob) {
//         // this => this keyword, when used inside a class or function, refers to the caller of the function

//         this.color = color; // my animal's color will be the color user gives during the creation of this class
//         this.species = species; // my animal's species will be the species user gives during the creation of this class
//         this.sound = sound; // my animal's sound will be the sound the user gives during the creation of this class
//         this.dob = dob
//     }

//     // static functions
//     makeSound() {
//         console.log(this.species + " says: " + this.sound)
//     }

//     analyze() {
//         console.log(this.color, this.species, this.sound);
//     }

//     isEligibleForVaccine() {
//         const today = new Date().getFullYear();
//         const birthday = new Date(this.dob).getFullYear()

//         const age = today - birthday;

//         if (age < 3) console.log("Your animal is not eligible for vaccination.")
//         else{
//             console.log("Your animal is eligible for vaccination.")
//         }
//     }

// }

// const cow = new Animal("black", "cattle", "moo", "11-05-2024");
// const dog = new Animal("white", "chihuahua", "woof");

// const animals = [];

// animals.push(cow);
// animals.push(dog);

// // animals.forEach( (animal)=>{ console.log("current animal: ", animal.species)} )


// // cow.makeSound();
// // dog.makeSound();

// cow.isEligibleForVaccine()


// ------------------ Defining Sub-classes and Inheritance


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play() {
        console.log(`${this.name} wants to play with you!!`)
    }

    passYear() {
        this.age = this.age + 1
    }
}

class Dog extends Animal {
    // sub-classes have a rule, and that is you have to put whatever you had to put on the upper class into the constructor
    constructor(name, age, breed) {
        // you put whatever the above classes require inside the super() function to allow it to be created
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.breed} ${this.name} barks! `)
    }
}



const dog = new Dog("Rex", 5, "German Shepherd");
const bird = new Animal('Red', 10, 'Mockingbird');

console.log(dog.age)

dog.passYear();
dog.passYear();
dog.passYear();

bird.
console.log(dog.age)