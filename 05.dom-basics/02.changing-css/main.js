const button = document.querySelector('.button')

button.addEventListener('click', _ => {
  button.style.color = 'white'
  button.style.setProperty('background-color', 'darkorchid')
  button.style.width = '200px'
  button.style.setProperty('height', '100px')
  // extra
  button.innerHTML = 'BUTTON &#x1F601'
  button.style.fontSize = '32px'
})
