// The NOT operator (!)

const str = ''

if (!str) {
  // Only do something if string is empty (NOT truthy)
  console.log("I'm empty")
}

// null is falsey. However, it is not a boolean, it is an object which is a falsey value.
// example
if (null === false) {
  console.log('Yes, equal in value and type.')
} else {
  console.log('No, not equal in value and type')
}

// if we use !! on null, it is converted to a boolean of it's falsey value.
// example: you see it matches false in both value and type.
if (!!null === false) {
  console.log('Yes, equal in value and type.')
} else {
  console.log('No, not equal in value and type')
}

// Exercises

// What values would you get for each of these expressions?

// 1. !2550284
// 2. !true
// 3. !NaN
// 4. !{}
// 5. !!'Pandas are adorable!'
// 6. !!''

console.log('1. !2550284   --> ', !2550284)
console.log('2. !true   --> ', !true)
console.log('3. !NaN   --> ', !NaN)
console.log('4. !{}   --> ', !{})
console.log('5. !!"Pandas are adorable!"   --> ', !!'Pandas are adorable!')
console.log('6. !!""   --> ', !!'')
