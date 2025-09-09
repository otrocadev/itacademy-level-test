import { fizzBuzz } from './fizzBuzz.js'

const myFunction = () => {
  console.log(fizzBuzz(inputNumber.value))
}

const inputNumber = document.getElementById('input-number')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  myFunction()
})
