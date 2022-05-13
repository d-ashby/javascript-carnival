// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// creating a mole image variable
let mole = document.createElement('img')
mole.src = 'mole.png'
mole.id = 'mole'
//mole.innerHTML = 'mole'
mole.style.width = '70px'
mole.style.height = '70px'
let audio = new Audio('whack-audio.wav')

console.log('Whack-a-Mole!')
// the ability to store OR reference the cells inside the html table

let moleHoles = document.getElementsByTagName('td')
// this logs all the td elements in the html page
// console.log(moleHoles)
//for example  logging moleHoles[7] gets the 7th td element which is the 2nd row 2nd column

// a function to randomly generate a number this will be used to select a random molehole for the mole to appear in
function whatHole(max) {
  return Math.floor(Math.random() * max)
}

// placing a mole using the randomly generated number this also needs to clear the board so upon multiple clicks that calls upon generate mole when either an empty space is clicked on or on the mole itself. a timer should also be incorporated that once it reaches 0 it initiates the function again. this timer could then change depending on how many moles have been struck hit 10 the timer will decrease and respawns will happen faster.
function generateMole() {
  let moleHoles = document.getElementsByTagName('td')
  moleHoles[whatHole(25)].appendChild(mole)
}
generateMole()

// create an event where when the mole is clicked on it plays the sound and respawns somewhere else

for (let i = 0; i < moleHoles.length; i++) {
  moleHoles[i].onclick = whack
}
function whack(e) {
  let cell = e.target
  //let actual = cell.id
  //console.log(actual)
  if (cell.id === 'mole') {
    audio.play()
    generateMole()
  } else if (cell.id == '') {
    console.log('i am empty')
  }
}

// this then needs to change the molehole to feature an image of a mole

// add an event that onclicking the mole we can have it alert or change the image to a youch sign and makes another mole appear generateMole
