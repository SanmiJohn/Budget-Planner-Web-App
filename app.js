const IncomeButton = document.getElementById('incomebtn');
const ExpenseButton = document.getElementById('expensebtn');
let Description = document.getElementById('description')
let Amount = document.getElementById('amount')
const ExpenseAdded = document.querySelector('.expenseadded')
let IncomeAmount = document.getElementById('incomeAmount')
let ExpenseAmount = document.getElementById('expenseAmount')
let AvailableAmount = document.getElementById('availableAmount')
let newIncomeDiv = document.querySelector('.newincomediv')
const IncomeBar = document.getElementById('income')
const ExpenseBar = document.getElementById('expense')

function Income() {
    if (Description.value && Amount.value) {

        let newIncomeDisplay = document.createElement('div')
        let newDescriptionSpan = document.createElement('span')
        let newAmountSpan = document.createElement('span')
        newDescriptionSpan.innerText = Description.value
        newAmountSpan.innerText = Amount.value
        newDescriptionSpan.classList.add('descriptionspan')
        newAmountSpan.classList.add('amountspan')

        newIncomeDisplay.classList.add('incomeadded')
        IncomeBar.appendChild(newIncomeDisplay)
        IncomeBar.appendChild(newDescriptionSpan)
        IncomeBar.appendChild(newAmountSpan)

        let prevIncomeAmount = IncomeAmount.innerHTML
        let newIncomeAmount = new Intl.NumberFormat().format(parseFloat(prevIncomeAmount.replace(/,/g, '')) + parseFloat(Amount.value))
        IncomeAmount.innerHTML = newIncomeAmount
        let prevExpenseAmount = ExpenseAmount.innerHTML
        let newExpenseAmount = new Intl.NumberFormat().format(parseFloat(prevExpenseAmount.replace(/,/g, '')))
        let TotalAvailableAmount = new Intl.NumberFormat().format(parseFloat(newIncomeAmount.replace(/,/g, '')) - parseFloat(newExpenseAmount))
        AvailableAmount.innerHTML = TotalAvailableAmount

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

        let newExpenseDisplay = document.createElement('div')
        let newDescriptionSpan = document.createElement('span')
        let newAmountSpan = document.createElement('span')
        newDescriptionSpan.innerText = Description.value
        newAmountSpan.innerText = Amount.value
        newDescriptionSpan.classList.add('descriptionspan')
        newAmountSpan.classList.add('amountspan')

        newExpenseDisplay.classList.add('expenseadded')
        ExpenseBar.appendChild(newExpenseDisplay)
        ExpenseBar.appendChild(newDescriptionSpan)
        ExpenseBar.appendChild(newAmountSpan)

        let prevExpenseAmount = ExpenseAmount.innerHTML
        let newExpenseAmount = new Intl.NumberFormat().format(parseFloat(prevExpenseAmount.replace(/,/g, '')) + parseFloat(Amount.value))
        ExpenseAmount.innerHTML = newExpenseAmount
        let prevIncomeAmount = IncomeAmount.innerHTML
        let newIncomeAmount = new Intl.NumberFormat().format(parseFloat(prevIncomeAmount.replace(/,/g, '')))
        AvailableAmount.innerHTML = new Intl.NumberFormat().format(parseFloat(newIncomeAmount) - parseFloat(newExpenseAmount))

        Description.value = ''
        Amount.value = ''
    }
    else if (Description.value) {
        alert('Input Amount')
    } else if (Amount.value) {
        alert('Input Description')
    } else if (Amount.value === String) {
        alert('Input a Number')
    } else {
        alert('Input Description and Amount')
    }
}

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense)