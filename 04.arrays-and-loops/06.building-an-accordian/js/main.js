// START EDITING YOUR JAVASCRIPT HERE
// ===============

const accordions = Array.from(document.querySelectorAll('.accordion'))

// forEach method: best way...............................

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion__header')

  accordionHeader.addEventListener('click', _ => {
    accordion.classList.toggle('is-open')
  })
})




// ********* Other ways to implement this ************

// for of loop: second best way..............................

// for (let accordion of accordions) {
//   const accordionHeader = accordion.querySelector('.accordion__header')

//   accordionHeader.addEventListener('click', _ => {
//     accordion.classList.toggle('is-open')
//   })
// }

// regular for loop...........................................

// for (let i = accordions.length - 1; i >= 0; i--) {
//   const accordionHeader = accordions[i].querySelector('.accordion__header')

//   accordionHeader.addEventListener('click', _ => {
//     accordions[i].classList.toggle('is-open')
//   })
// }
