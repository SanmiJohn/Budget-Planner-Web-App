const IncomeButton = document.getElementById('incomebtn');
const ExpenseButton = document.getElementById('expensebtn');
let Description = document.getElementById('description')
let Amount = document.getElementById('amount')
const IncomeAdded = document.getElementById('incomeadded')
const ExpenseAdded = document.getElementById('expenseadded')

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense)

function Income() {
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
    Description.value = ''
    Amount.value = ''
}

function Expense() {
    let newExpenseDiv = document.createElement('div')
    newExpenseDiv.style.backgroundColor = 'white'
    newExpenseDiv.style.width = '16rem'
    newExpenseDiv.style.height = '1.5rem'
    newExpenseDiv.style.borderRadius = '1rem'
    newExpenseDiv.style.marginBottom = '0.7rem'
    newExpenseDiv.style.marginLeft = '0.6rem'
    newExpenseDiv.style.paddingTop = '0.3rem'
    ExpenseAdded.append(newExpenseDiv)
    Description.value = ''
    Amount.value = ''
}
