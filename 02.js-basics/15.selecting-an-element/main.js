
//Exercises

//1. Get the #star-wars-characters list with id and tag selectors.

const byId = document.querySelector('#star-wars-characters')
console.log('byId: ', byId)

const byTag = document.querySelector('ul')
console.log('byTag: ', byTag)

//2. From the #star-wars-characters list, get the following:
//    i. Luke Skywalker with class, tag and attribute selectors

const LukeByClass = byId.querySelector('.luke')
console.log('LukeByClass: ', LukeByClass)

const LukeByTag = byId.querySelector('li')
console.log('LukeByTag: ', LukeByTag)

const LukeByAttribute = byId.querySelector('[data-type="hero"]')
console.log('LukeByAttribute: ', LukeByAttribute)

//    ii. Yoda with class and attribute selectors

const YodaByClass = document.querySelector('.yoda')
console.log('YodaByClass: ', YodaByClass)

const YodaByAttribute = document.querySelector('[data-type="master"]')
console.log('YodaByAttribute: ', YodaByAttribute)

//    iii. Darth Vader with class and attribute selectors

const VaderByClass = document.querySelector('.badboy')
console.log('VaderByClass: ', VaderByClass)

const VaderByAttribute = document.querySelector('[data-type="villain"]')
console.log('VaderByAttribute: ', VaderByAttribute)

//3. Notice how you can't select Yoda and Darth Vader with tags when you use querySelector.


// extra

const starWars = document.querySelector('#star-wars-characters')
const Luke = starWars.querySelector('li')
console.log(Luke)

