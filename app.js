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
function Person (name, age, email, address) {
    this.name = name
    this.age = age
    this.email = email
    this.address = address
    this.printInfo = () => {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        Address: ${this.address}
        `)
    }
}
let person1 = new Person('John Doe', 54, 'jg@gmail.com', '123 Main st')
person1.printInfo()

function Teacher (name, age, email, address, subject) {
    // this.name = name
    // this.age = age
    // this.email = email
    // this.address = address
    // call=allows us to grab properties from another function
    Person.call(this, name, age, email, address)
    this.subject = subject
}
let teacher1 = new Teacher('Mr Johnson', 54, 'jj@gmail.com', '321 S Fig', 'math')
console.log(teacher1)
// Instructor now discussing how to use Person and Teacher constructors together

function Student (name, age, email, address, interest) {
    Person.call(this, name, age, email, address)
    this.interest = interest
}
let student1 = new Student('Lip Philliman', 16, 'OOP@gmail.com', '32 Downtown', 'history')
console.log(student1)

