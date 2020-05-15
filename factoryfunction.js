// Factory functions return an object
// const Animal = () => animal CAN GO DIRECTLY TO THE OBJECT
const Animal = (type, sound) => ({ type, sound })

let dog = Animal('dog', 'bark')

// SPREAD IS LIKE OPPOSITE OF SUPER, SPREAD OPERATOR APPLIES EVERYTHING FROM ANIMAL TO REPTILE ... IS SPREAD
const Reptile = (type, sound, scales) => ({
    ...Animal(type, sound), scales
})

let lizard = Reptile('lizard', 'hiss', 100)
console.log(lizard)
