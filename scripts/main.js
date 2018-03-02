console.log('JS Loaded!')
let seconds = localStorage.getItem('timer') || 0
let running = false
let inc = 0

document.querySelector('#title span').innerHTML = seconds

//document.querySelector(.btn)

// setInterval(function (){
//   seconds++
//   document.querySelector('#title span').innerHTML = seconds
// },1000)

const buttons = document.querySelectorAll('.btn')
const startButton = buttons[0]
const stopButton = buttons[1]

startButton.addEventListener('click', function () {
  if(running == false){
    running = true
  inc = setInterval(function (){
    seconds++
    localStorage.setItem('timer',seconds)
    document.querySelector('#title span').innerHTML = seconds
  },1000)
}
})

stopButton.addEventListener('click', function () {
  if(running){
    running = false
    clearInterval(inc)
  } else {
    seconds = 0;
    localStorage.setItem('timer',seconds)
    document.querySelector('#title span').innerHTML = seconds
  }
})
