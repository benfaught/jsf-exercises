const element = document.querySelector('div')

const fontSize = element.style.fontSize
const background = element.style.backgroundColor
const color = element.style.color
console.log(fontSize)
console.log(background)
console.log(color)

const computed = getComputedStyle(element)

console.log(computed.fontSize)
console.log(computed.backgroundColor)
console.log(computed.color)
