// Do the following:

// 1. Select all good guys with attributes

const goodGuys = document.querySelectorAll('[data-type="good-guy"]')

console.log(goodGuys)

// 2. Give good guys a yay class

goodGuys.forEach(element => {
  element.classList.add('yay')
})

// 3. Select all villains with attributes

const villains = document.querySelectorAll('[data-type="villain"]')

console.log(villains)

// 4. Give villains a nay class

villains.forEach(element => {
  element.classList.add('nay')
})

// 5. Select all characters through the character class.

const characters = document.querySelectorAll('.character')

console.log(characters)

// 6. Give all characters a star-wars class

characters.forEach(element => {
  element.classList.add('star-wars')
})
