const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
]

// 1. console.log the first name of each person in the array.

people.forEach(element => {
  console.log(element.firstName)
})

// 2. Make a second array that contains only the first name of each person

console.log('\n#2')

let firstNamesOnly = []

people.forEach(element => {
  firstNamesOnly = firstNamesOnly.concat(element.firstName)
})

console.log(firstNamesOnly)

// 3. Make a third array that contains people that have died after 1950.

console.log('\n#3')

let diedAfter1950 = []

people.forEach(element => {
  if (element.yearOfDeath > 1950) {
    diedAfter1950 = diedAfter1950.concat(element)
  }
})

console.log(diedAfter1950)

// Find index of Charles Darwin in the array.

console.log('\n#4')

people.forEach(element => {
  if (element.lastName === 'Darwin') {
    let DarwinsPosition = people.indexOf(element)
    console.log('Charles Darwin is at postion: ', DarwinsPosition)
  }
})
