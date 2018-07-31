// 1. Write an click event listener. Log something into the console so you know the listener works.

// 2. Check the existence of the listener with Firefox's devtools.

// 3. Check the existence of the listener with Chrome Devtools.

const button = document.querySelector('div')

button.addEventListener('click', () => {
    button.classList.add('is-working')
    console.log('This event listener is working!')
})

// 4. Add a class to the component when it is clicked. Remove a class from the component when it is clicked again.

button.addEventListener('click', () => {
    button.classList.toggle('is-clicked')
})