// 1. Add a "red" class to me!

const div = document.querySelector('div')

div.classList.add('red')

// 2. Remove the class, "remove", from me!

const removeClass = document.querySelector('.remove')

removeClass.classList.remove('remove')

// 3. Do I have a blue class?

const hasClass1 = document.querySelector('.contains>div')

if (hasClass1.classList.contains('blue')) {
    console.log('Yes, you have class blue!')
} else {
    console.log('No')
}

// 4. Do I have a blue class?

const hasClass2 = document.querySelector('.contains>div:nth-child(2)')

if (hasClass2.classList.contains('blue')) {
    console.log('Yes, you have class blue!')
} else {
    console.log('No')
}

// 5. Do I have a "red" class? If yes, remove it. If no, add it.

const toggleMe = document.querySelector('.toggle')

toggleMe.classList.toggle('red')
