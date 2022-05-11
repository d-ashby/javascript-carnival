// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
// we might need to create an array of 3 unicorns
const unicorn = document.getElementsByClassName('unicorn')
const unicornArray = Array.from(unicorn)

console.log(unicornArray[1])
// add an onclick function for when you click on the images of unicorns this may need to be more specific?

document.getElementsByClassName('unicorn')
addEventListener('click', inflateMe)
// we need to create a function that checks the current image and then picks a new image based on what the current image is if and else if statements here

function inflateMe(e) {
  let inflate = e.target
  let location = inflate.src
  let source = location.slice(-13)

  // console.log(unicornArray)
  if (source == 'unicorn-0.png') {
    inflate.src = './images/unicorn-1.png'
  } else if (source == 'unicorn-1.png') {
    inflate.src = './images/unicorn-2.png'
  } else if (source == 'unicorn-2.png') {
    inflate.src = './images/unicorn-3.png'
  } else if (source == 'unicorn-3.png') {
    ;(inflate.src = './images/unicorn-0.png') && alert('pop')
    //} else inflate.src = './images/unicorn-0.png'
    //inflate.src = './images/unicorn-1.png'
    // function inflateMe() {
    //   //console.log('inflation')

    //   //else {
    //   unicornArray[0].src = './images/unicorn-2.png'
  }
}
