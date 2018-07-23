
// 1. Make an empty object

const emptyObject = {}

console.log(emptyObject)

// 2. Make a property for your object that can be accessed with a dot notation.

const animal1 = {
    dog: 'woof'
}

console.log(animal1.dog)

// 3. Make a property for your object that can only be accessed with the bracket notation.

const animal2 = {
    dog: 'woof',
    'spotted cow': 'moo'
}

console.log(animal2['spotted cow'])

// 4. Get the value of a property with the dot notation

const animal3 = {
    dog: 'woof',
    'spotted cow': 'moo'
}

const property = animal3.dog
console.log(property)

// 5. Get the value of a property with the square bracket notation

const animal4 = {
    dog: 'woof',
    'spotted cow': 'moo'
}

const property2 = animal4['spotted cow']
console.log(property2)

// 6. Set the value of a property with the dot notation

const animal5 = {
    dog: 'woof',
    'spotted cow': 'moo'
}

animal5.dog = 'ruff'
console.log(animal5.dog)

// 7. Set the value of a property with the square bracket notation

const animal6 = {
    dog: 'woof',
    'spotted cow': 'moo'
}

animal6['spotted cow'] = 'moo-moo'
console.log(animal6['spotted cow'])

// 8. Make a method. Call this method

const animal7 = {
    dog: 'woof',
    cow: 'moo',
    pig: 'oink',
    list: function () {
        return animal7
    }
}

console.log(animal7.list())

// 9. Make a method that takes in an argument. Call this method

const animal8 = {
    dog: 'woof',
    cow: 'moo',
    pig: 'oink',
    list: function () {
        console.log(animal8)
    },
    say: function (specificAnimal) {
        return 'I say: ' + this[specificAnimal]
    }
}

console.log(animal8.say('pig'))
