import { createHTMLElement } from './dom.js'
import { fizzBuzz } from './fizzBuzz.js'
import { valuesTested } from './values.js'

const main = document.getElementsByTagName('main')[0]
const inputNumber = document.getElementById('input-number')
const submitBtn = document.getElementById('submit-btn')

const addNewValue = () => {
  const newValue = fizzBuzz(inputNumber.value)
  valuesTested.push(newValue)
  createHTMLElement(main, valuesTested[valuesTested.length - 1])
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  try {
    addNewValue()
  } catch (error) {
    console.error(error)
  }
})
