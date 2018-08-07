// START EDITING YOUR JAVASCRIPT HERE
// ===============
const button = document.querySelector('.button')
const close = document.querySelector('.modal__close')

button.addEventListener('click', e => {
  document.body.classList.toggle('modal-is-open')
})

close.addEventListener('click', e => {
  document.body.classList.toggle('modal-is-open')
})
