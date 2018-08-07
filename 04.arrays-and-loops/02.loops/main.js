// 1. Loop through the numbers and console.log each number within

console.log('Answers #1: ')

const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// 2. Loop through the numbers. If the numbers are greater than 5, console.log them.

console.log('\nAnswers #2: ')

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i])
  }
}

// 3. Create a new array. Add all numbers that are greater than 10 into this new array. (Hint: You have to loop through the numbers array first)

console.log('\nAnswers #3: ')

let newArray = []

for (let each of numbers) {
  if (each > 10) {
    newArray = newArray.concat(each)
  }
}

console.log(newArray)

// 4. Create a new array. Multiply all numbers by 5 and put them into the new array. (Hint: You have to loop through the numbers array first).

console.log('\nAnswers #4: ')

let byFiveArray = []

for (let each of numbers) {
  let x5 = each * 5
  byFiveArray = byFiveArray.concat(x5)
}

console.log(byFiveArray)
