// Your scripts here

// Get references to elements
const inputBill = document.getElementById('bill')
const inputTip = document.getElementById('tip')
const inputPpl = document.getElementById('ppl')
const displayTotal = document.getElementById('displayTotal')
const displayTip = document.getElementById('displayTip')

const tipPercent = parseInt(inputTip.value)
const bill = parseFloat(inputBill.value)
const people = parseInt(inputPpl.value)


// Event handlers

inputBill.addEventListener('input', handleBill)
inputTip.addEventListener('input', handleTip)
inputPpl.addEventListener('input', handlePpl)

// Functions
let bill = 0

function handleBill(e) {
    const newBill = parseFloat(e.target.value)

    if (!isNaN(newBill)) {
        bill = newBill
    } else {
        e.target.value = bill
    }
}

function calculateTip() {
    const tip = bill * tipPercent/100
    const total = bill + tip
    const partySplit = total/people

    displayTip.innerHTML = tip.toFixed(2)
    displayTotal.innerHTML = total.toFixed(2)
    displayEach.innerHTML = partySplit.toFixed(2)
}
// function handleTip(e) {

// }

// function handlePpl(e) {

// }

// function handleDisplayTotal(e) {

// }

// function handleDisplayTip(e) {

// }