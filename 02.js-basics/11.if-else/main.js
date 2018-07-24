
// James is 22 years old, Valerie is 25 years old, Kenneth is 27 years old. Answer the following questions with the above code:

// 1. Make an if/else statement to check if you are younger than James.

const Ben = 42
const James = 22
const Valarie = 25
const Kenneth = 27

if (Ben < James) {
    console.log('You are younger than James.')
} else {
    console.log('You are NOT younger than James.')
}

// 2. Make an else if statement within your if/else to check if you are older than Valerie.

if (Ben <= James) {
    console.log('You are younger or equal to James.')
} else if (Valarie > Ben) {
    console.log('You are younger than Valarie.')
} else {
    console.log('You are NOT younger than James or Valerie.')
}

// 3. Make another else if statement to check if you're as old as Kenneth.

if (James >= Ben) {
    console.log('You are younger or equal to James.')
} else if (Valarie > Ben) {
    console.log('You are younger than Valarie.')
} else if (Ben < Kenneth) {
    console.log('You are younger than Kenneth.')
} else if (Ben === Kenneth) {
    console.log('You and Kenneth are the same age.')
} else if (Ben !== Kenneth) {
    console.log('You are NOT younger or the same age as Kenneth.')
    console.log("Damn you're old!")
} else {
    console.log('Something went wrong. I should not have printed')
}

// Answer the rest of the questions below with reference to the following code:

//        const someValue = 22
//        if (someValue) {
//             Executes if true
//        } else {
//             Executes if false
//        }

// Would the if statement above execute:

//  1. If someValue is false? no
let someValue = false
if (someValue) {
    console.log('1. yes')
} else {
   console.log('1. no')
}

//  2. If someValue is true? yes
someValue = true
if (someValue) {
    console.log('2. yes')
} else {
   console.log('2. no')
}

//  3. If someValue is null? no
someValue = null
if (someValue) {
    console.log('3. yes')
} else {
   console.log('3. no')
}

//  4. If someValue is undefined? no
someValue = undefined
if (someValue) {
    console.log('4. yes')
} else {
   console.log('4. no')
}

//  5. If someValue is 0? no
someValue = 0
if (someValue) {
    console.log('5. yes')
} else {
   console.log('5. no')
}

//  6. If someValue is -1? yes
someValue = -1
if (someValue) {
    console.log('6. yes')
} else {
   console.log('6. no')
}

//  7. If someValue is ''? no
someValue = ''
if (someValue) {
    console.log('7. yes')
} else {
   console.log('7. no')
}

//  8. If someValue is 'has a value!'? yes
someValue = 'has a value!'
if (someValue) {
    console.log('8. yes')
} else {
   console.log('8. no')
}

//  9. If someValue is {}? yes
someValue = {}
if (someValue) {
    console.log('9. yes')
} else {
   console.log('9. no')
}

//  10. If someValue is { isHavingFun: true }? yes
someValue = { isHavingFun: true }
if (someValue) {
    console.log('10. yes')
} else {
   console.log('10. no')
}

//  11. If someValue is []? yes
someValue = []
if (someValue) {
    console.log('11. yes')
} else {
   console.log('11. no')
}

//  12. If someValue is ['one', 'two', 'three']? yes
someValue = ['one', 'two', 'three']
if (someValue) {
    console.log('12. yes')
} else {
   console.log('12. no')
}
