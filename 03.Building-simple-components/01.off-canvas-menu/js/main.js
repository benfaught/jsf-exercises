// START EDITING YOUR JAVASCRIPT HERE
// ===============

const offsiteToggle = document.querySelector('.jsOffsiteToggle')
offsiteToggle.addEventListener('click', e => console.log('push the screen!'))


offsiteToggle.addEventListener('click', e => {
   document.body.classList.toggle('offsite-is-open')
})