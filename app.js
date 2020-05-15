// let animal1 = {
//     type: 'dog',
//     sound: 'bark'
// }

// let animal2 = {
//     type: 'cat',
//     sound: 'meow'
// }

// let animal2 = {
//     type: 'giraffe',
//     sound: 'WEEEE!'
// }

// example stuff above



// PERSON INFO ACTIVITY FROM HERE
// function Person (name, age, email, address) {
//     this.name = name
//     this.age = age
//     this.email = email
//     this.address = address
//     this.printInfo = () => {
//         console.log(`
//         Name: ${this.name}
//         Age: ${this.age}
//         Email: ${this.email}
//         Address: ${this.address}
//         `)
//     }
// }
// let person1 = new Person('John Doe', 54, 'jg@gmail.com', '123 Main st')
// person1.printInfo()

// function Teacher (name, age, email, address, subject) {
//     // this.name = name
//     // this.age = age
//     // this.email = email
//     // this.address = address
//     // call=allows us to grab properties from another function
//     Person.call(this, name, age, email, address)
//     this.subject = subject
// }
// let teacher1 = new Teacher('Mr Johnson', 54, 'jj@gmail.com', '321 S Fig', 'math')
// console.log(teacher1)
// // Instructor now discussing how to use Person and Teacher constructors together

// function Student (name, age, email, address, gpa, grade, favoriteSub) {
//     Person.call(this, name, age, email, address)
//     this.gpa = gpa
//     this.grade = grade
//     this.favoriteSub = favoriteSub
// }
// let student1 = new Student('Lip Philliman', 16, 'OOP@gmail.com', '32 Downtown', '3.8', 12, 'history')
// console.log(student1)

class Animal {
    constructor (type, sound) {
        this.type = type
        this.sound = sound
        this.makeSound = () => {
            console.log(this.sound)
        }
    }
}
let dog = new Animal('dog', 'bark')

dog.makeSound()
// (BELOW) NOW REPTILE EXTENDS THE PROPERTIES OF ANIMALS=====>super refers to the extended constructor
class Reptile extends Animal {
    constructor(type, sound, scales) {
        super(type, sound)
        this.scales = scales
    }
}

let lizard = new Reptile('lizard', 'hiss', 100)

console.log(lizard)