// START EDITING YOUR JAVASCRIPT HERE
// ===============

const offsiteToggle = document.querySelector('.jsOffsiteToggle')
offsiteToggle.addEventListener('click', _ => console.log('push the screen!'))

offsiteToggle.addEventListener('click', _ => {
  document.body.classList.toggle('offsite-is-open')
})
