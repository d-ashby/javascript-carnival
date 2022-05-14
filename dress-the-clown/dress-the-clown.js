// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
// add an id to head body and shoes. this was totally not needed. i had to add an id within the html file first. not sure how to do that through JS yet - maybe this would have worked if i did it in a correct order? it seemed to work on the surface.
const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')
let clothingIndex = 0

//creating a universal clothing changer

let clothingItem = 0
// having these as strings causes src location to come up as undefined, this needs to be an array of the constants defined above.
const bodyPartArray = ['head', 'body', 'shoes']
const bodyPartsArray = [head, body, shoes]
// let headIndex = 0
// let bodyIndex = 0
// let shoeIndex = 0
// let clownHead = document.getElementsByClassName('dress-an-image head')
// clownHead.id = 'head'
// let clownBody = document.getElementsByClassName('dress-an-image body')
// clownBody.id = 'body'
// let clownShoes = document.getElementsByClassName('dress-an-image shoes')
// clownShoes.id = 'shoes'
// console.log(clownHead)
// console.log(clownBody)
// console.log(clownShoes)

// for some reason this is not working - what i am expecting to get is bodypart array position 0 1 2 are equal to head body shoes. so therefore bodypartarray[clothingIndex] should return the value of clothingIndex ie 1 therefore body...
let part = bodyPartArray[clothingIndex]
let parts = bodyPartsArray[clothingIndex]
console.log(part)
// create a universal clothingItem changer. this might not let the item remain
function changer() {
  parts.src = './images/' + part + clothingItem + '.png'
}
console.log(parts.src)
//console.log(part.src)
// // create a function that can manipulate the image source
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
      if (clothingIndex == 2) (clothingIndex = 0), changer()
      else clothingIndex++, changer(), console.log(clothingIndex)
      break
    case 39: //left
      if (clothingItem == 5) (clothingItem = 0), changer()
      else clothingItem++, changer()

      break
    case 40: // down
      if (clothingIndex >= 0) (clothingIndex = 2), changer()
      else clothingIndex--, changer()
      break
  }
})

// changeClownHead()
// document.addEventListener('keydown', function (e) {
//   switch (e.keyCode) {
//     case 37: //right
//       if (headIndex == 0 && clothingIndex == 0)
//         (headIndex = 5), changeClownHead()
//       else headIndex--, changeClownHead()

//       break
//     case 38: //up
//       // if (clothingIndex == 2) clothingIndex = 0
//       // else clothingIndex++
//       break
//     case 39: //left
//       if (headIndex == 5 && clothingIndex == 0)
//         (headIndex = 0), changeClownHead()
//       else headIndex++, changeClownHead()

//       break
//     case 40: // down
//       // if (clothingIndex == 0) clothingIndex = 2
//       // else clothingIndex--
//       break
//   }
// })
