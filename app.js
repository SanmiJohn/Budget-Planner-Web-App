const IncomeButton = document.getElementById('incomebtn');
const ExpenseButton = document.getElementById('expensebtn');
let Description = document.getElementById('description')
let Amount = document.getElementById('amount')
const IncomeAdded = document.getElementById('incomeadded')
const ExpenseAdded = document.getElementById('expenseadded')
let Green = document.getElementById('green')
let Black = document.getElementById('black')
let Red = document.getElementById('red')

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense)

function Income() {
    if (Description.value && Amount.value) {
        let newIncomeDiv = document.createElement('div')
        newIncomeDiv.style.backgroundColor = 'white'
        newIncomeDiv.style.width = '16rem'
        newIncomeDiv.style.height = '1.5rem'
        newIncomeDiv.style.borderRadius = '1rem'
        newIncomeDiv.style.marginBottom = '0.7rem'
        newIncomeDiv.style.marginRight = '0.8rem'
        newIncomeDiv.style.paddingTop = '0.3rem'

        let newDescriptionSpan = document.createElement('span')
        newDescriptionSpan.style.marginRight = '4rem'
        newDescriptionSpan.innerText = Description.value

        let newAmountSpan = document.createElement('span')
        newAmountSpan.style.marginLeft = '4rem'
        newAmountSpan.style.color = '#007f5f'
        newAmountSpan.innerText = Amount.value

        newIncomeDiv.append(newDescriptionSpan)
        newIncomeDiv.append(newAmountSpan)

        IncomeAdded.append(newIncomeDiv)
        Green.innerText = Amount.value

        Description.value = ''
        Amount.value = ''

    } else if (Description.value) {
        alert('Input Amount')
    } else if (Amount.value) {
        alert('Input Description')
    } else {
        alert('Input Description and Amount')
    }
}

function Expense() {
    if (Description.value && Amount.value) {
        let newExpenseDiv = document.createElement('div')
        newExpenseDiv.style.backgroundColor = 'white'
        newExpenseDiv.style.width = '16rem'
        newExpenseDiv.style.height = '1.5rem'
        newExpenseDiv.style.borderRadius = '1rem'
        newExpenseDiv.style.marginBottom = '0.7rem'
        newExpenseDiv.style.marginLeft = '0.6rem'
        newExpenseDiv.style.paddingTop = '0.3rem'

        let newDescriptionSpan = document.createElement('span')
        newDescriptionSpan.style.marginRight = '4rem'
        newDescriptionSpan.innerText = Description.value

        let newAmountSpan = document.createElement('span')
        newAmountSpan.style.marginLeft = '4rem'
        newAmountSpan.style.color = '#d90429'
        newAmountSpan.innerText = Amount.value

        newExpenseDiv.append(newDescriptionSpan)
        newExpenseDiv.append(newAmountSpan)

        ExpenseAdded.append(newExpenseDiv)
        Red.innerText = Amount.value
        Description.value = ''
        Amount.value = ''
    }
    else if (Description.value) {
        alert('Input Amount')
    } else if (Amount.value) {
        alert('Input Description')
    } else {
        alert('Input Description and Amount')
    }
}
