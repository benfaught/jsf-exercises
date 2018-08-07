// 1. Make an empty array that contains nothing.

const emptyArray = []
console.log(emptyArray)

// 2. Make an array that contains three items.

const cars = ['Toyota', 'Ford', 'Tesla']
console.log(cars)

// The following questions require you to make use of the people array provided below.

const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Napolean Bonaparte',
  'Abraham Lincoln',
  'Mother Theresa',
  'Mahatma Gandhi',
  'Winston Churchill',
  'Charles Darwin',
  'Albert Einstein',
  'Pablo Picasso',
  'Ludwig Beethoven',
  'Walt Disney',
  'Henry Ford',
  'Steve Jobs'
]

// 1. What is the index of Mahatma Gandhi in this list of people?

console.log(people.indexOf('Mahatma Gandhi'))

// 2. Get Pablo Picasso from the people array.

const pabloPosition = people.indexOf('Pablo Picasso')
const getPablo = people[pabloPosition]
console.log(getPablo)

// Or

const pablo = people[people.indexOf('Pablo Picasso')]
console.log(pablo)

// 3. Set Walt Disney to Disneyland.

people[people.indexOf('Walt Disney')] = 'Disneyland'
console.log(people[people.indexOf('Disneyland')])

// 4. Add your best friend's name to the end of the list

const bestFriendAdd = people.concat('Kris')
console.log(bestFriendAdd)

// 5. Add another friend's name to the start of the list

const anotherFriend = 'Thomas'
const arrayToPrepend = [anotherFriend]

const friendAdd = arrayToPrepend.concat(people)
console.log(friendAdd)

// 6. Add your name after Winston Churchill in the list

const firstPart = people.slice(0, 8)

const secondPart = people.slice(8)

const arrayToAdd = ['Benjamin Faught']

const combinedArray = [].concat(firstPart, arrayToAdd, secondPart)
console.log(combinedArray)

// 7. Remove Benjamin Franklin from this list

const noFranklin = people.slice(1)
console.log(noFranklin)

// 8. Remove Steve Jobs from this list

const noJobs = people.slice(0, -1)
console.log(noJobs)

// 9. Remove Napolean Bonaparte from this list

const noBonaparte = [].concat(people.slice(0, 3), people.slice(4))
console.log(noBonaparte)
