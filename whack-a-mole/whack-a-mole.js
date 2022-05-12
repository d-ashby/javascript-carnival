// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// creating a mole image variable
let mole = document.createElement('img')
mole.src = 'mole.png'
mole.style.width = '70px'
mole.style.height = '70px'

console.log('Whack-a-Mole!')
// the ability to store OR reference the cells inside the html table

let moleHoles = document.getElementsByTagName('td')
// this logs all the td elements in the html page
console.log(moleHoles)
//for example  logging moleHoles[7] gets the 7th td element which is the 2nd row 2nd column

// a function to randomly generate a number this will be used to select a random molehole for the mole to appear in
function whatHole(max) {
  return Math.floor(Math.random() * max)
}
console.log(whatHole(25))
// placing a mole using the randomly generated number
function generateMole() {
  moleHoles[whatHole(25)].appendChild(mole)
}
generateMole()
// this then needs to change the molehole to feature an image of a mole

// add an event that onclicking the mole we can have it alert or change the image to a youch sign and makes another mole appear generateMole
