// Get references to elements
const inputBill = document.getElementById('bill')
const inputTip = document.getElementById('tip')
const inputPpl = document.getElementById('ppl')

const displayTotal = document.getElementById('displayTotal')
const displayTip = document.getElementById('displayTip')
const displaySplit = document.getElementById('displaySplit')

// const tipPercent = parseInt(inputTip.value)
// const bill = parseFloat(inputBill.value)
// const people = parseInt(inputPpl.value)


// Functions
let bill = 0

function calculateTotal() {
    let bill = parseFloat(inputBill.value)
    let tipPercent = parseInt(inputTip.value)
    let people = parseInt(inputPpl.value)

    let tip = bill * tipPercent/100
    let total = bill + tip
    let partySplit = total/people

    displayTip.textContent = `\$ ${tip.toFixed(2)}`
    displayTotal.textContent = `\$ ${total.toFixed(2)}`
    displaySplit.textContent = `\$ ${partySplit.toFixed(2)}`

}

// Event handlers

inputBill.addEventListener('change', function (e) {
    calculateTotal()
})

inputTip.addEventListener('change', function (e) {
    calculateTotal()
})

inputPpl.addEventListener('change', function (e) {
    calculateTotal()
})

// function handleBill(e) {
//     const newBill = parseFloat(e.target.value)

//     if (!isNaN(newBill)) {
//         bill = newBill
//     } else {
//         e.target.value = bill
//     }
// }

// function calculateTip() {
//     const tip = bill * tipPercent/100
//     const total = bill + tip
//     const partySplit = total/people

//     displayTip.innerHTML = tip.toFixed(2)
//     displayTotal.innerHTML = total.toFixed(2)
//     displayEach.innerHTML = partySplit.toFixed(2)
// }
// function handleTip(e) {

// }

// function handlePpl(e) {

// }

// function handleDisplayTotal(e) {

// }

// function handleDisplayTip(e) {

// }