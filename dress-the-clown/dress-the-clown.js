// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
// add an id to head body and shoes. this was totally not needed. i had to add an id within the html file first. not sure how to do that through JS yet - maybe this would have worked if i did it in a correct order? it seemed to work on the surface.
const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')
// this indicates to the head body or shoe position
let clothingIndex = 0

//creating a universal clothing changer, this number changes based on the events listed below

let clothingItem = 0

// having these as strings causes src location to come up as undefined, this needs to be an array of the constants defined above.
// solved by creating two different arrays, one of strings for changing the source the other of variables containing the location of the element we need to manipulate.
const bodyPartArray = ['head', 'shoes', 'body']
const bodyPartsArray = [head, shoes, body]

function changer() {
  let part = bodyPartArray[clothingIndex]
  let parts = bodyPartsArray[clothingIndex]
  parts.src = './images/' + part + clothingItem + '.png'
}

//console.log(part.src)
// // create a function that can manipulate the image source. this was replaced with a generic changer function listed above.
// function changeClownHead() {
//   head.src = './images/head' + headIndex + '.png'

//   // clownHead.img = './images/head2.png'
// }

// function changeClownbody() {
//   body.src = './images/body' + bodyIndex + '.png'
// }

// function changeClownshoes() {
//   shoes.src = './images/shoes' + shoeIndex + '.png'
// }

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37: //right
      if (clothingItem == 0) (clothingItem = 5), changer()
      else clothingItem--, changer()

      break
    case 38: //up
      if (clothingIndex == 2) clothingIndex = 0
      //, changer()
      else clothingIndex++ //, changer()
      break
    case 39: //left
      if (clothingItem == 5) (clothingItem = 0), changer()
      else clothingItem++, changer()

      break
    case 40: // down
      if (clothingIndex == 0) clothingIndex = 2
      //, changer()
      else clothingIndex-- //, changer()
      break
  }
})

// some improvements could be that when flicking back to the different source locations we could slice the current location so we could re orient our clothing position. currently when the index number is changed it takes with it the index of the other clothing item, so when we start cycling through the clothes it starts from a new item of clothing not in the natural order of what was expected to come next...
// bodypart array and bodyparts array could be a single array, for some reason i cant turn the variable into a string when referenced by index position. so my work around was to create a secondary array of strings, cheeky!
