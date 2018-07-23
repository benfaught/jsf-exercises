
// 1. Make a function named ten that takes in zero arguments and return the value 10. 
// Try using both () and _ syntax.

const ten = () => {
    return 10;
}

// here the function is not called. notice there are no parentheses. 
// this prints: [Function: ten]
console.log(ten);

// here the function is called.  prints: 10
console.log(ten());


// 2. Make a function named logger that takes in one argument. It logs the argument you 
// passed into it. Try it with and without parenthesis ().

const logger = (info) => {
    console.log(info);
}

logger('log me please');

// 3. Make a function called add that adds two numbers together. Try it with and without 
// implicit returns

// without an implicit return
const add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(30,70));

// with an implicit return
const addTwo = (num1, num2) =>  num1 + num2;

console.log(addTwo(20,25));
