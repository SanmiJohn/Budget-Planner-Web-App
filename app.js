const IncomeButton = document.getElementById('incomebtn');
const ExpenseButton = document.getElementById('expensebtn');
let Description = document.getElementById('description')
let Amount = document.getElementById('amount')
let IncomeSpan = document.getElementById('incomespan')
let AmountSpan = document.getElementById('amountspan')
const IncomeAdded = document.getElementById('incomeadded')
const ExpenseAdded = document.getElementById('expenseadded')

function Income() {
    IncomeAdded.style.backgroundColor = 'white'

    IncomeSpan.innerText = Description.value
    Description.value = ''

    AmountSpan.innerText = Amount.value
    Amount.value = ''
}

function Expense() {
    // ExpenseAdded.append(Now)
}

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense) 