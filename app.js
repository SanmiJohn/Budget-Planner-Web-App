const IncomeButton = document.getElementById('incomebtn');
const ExpenseButton = document.getElementById('expensebtn');
const ResetButton = document.getElementById('resetbtn');
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
        let newDescriptionSpan = document.createElement('div')
        let newAmountSpan = document.createElement('div')
        newDescriptionSpan.innerText = Description.value
        newAmountSpan.innerText = Amount.value
        newDescriptionSpan.classList.add('descriptionspan')
        newAmountSpan.classList.add('amountspan')

        newIncomeDisplay.classList.add('incomeadded')
        IncomeBar.appendChild(newIncomeDisplay)
        IncomeBar.appendChild(newDescriptionSpan)
        IncomeBar.appendChild(newAmountSpan)

        let prevIncomeAmount = IncomeAmount.innerHTML
        let newIncomeAmount = parseFloat(prevIncomeAmount.replace(/,/g, '')) + parseFloat(Amount.value)
        let prevExpenseAmount = ExpenseAmount.innerHTML
        let newExpenseAmount = new Intl.NumberFormat().format(parseFloat(prevExpenseAmount))
        let TotalAvailableAmount = parseFloat(newIncomeAmount) - parseFloat(newExpenseAmount.replace(/,/g, ''))
        AvailableAmount.innerHTML = new Intl.NumberFormat().format(TotalAvailableAmount)

        IncomeAmount.innerHTML = new Intl.NumberFormat().format(newIncomeAmount)

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
        let newDescriptionSpan = document.createElement('div')
        let newAmountSpan = document.createElement('div')
        newDescriptionSpan.innerText = Description.value
        newAmountSpan.innerText = Amount.value
        newDescriptionSpan.classList.add('descriptionspan')
        newAmountSpan.classList.add('amountspan')

        newExpenseDisplay.classList.add('expenseadded')
        ExpenseBar.appendChild(newExpenseDisplay)
        ExpenseBar.appendChild(newDescriptionSpan)
        ExpenseBar.appendChild(newAmountSpan)

        let prevExpenseAmount = ExpenseAmount.innerHTML
        let newExpenseAmount = parseFloat(prevExpenseAmount.replace(/,/g, '')) + parseFloat(Amount.value)
        ExpenseAmount.innerHTML = new Intl.NumberFormat().format(parseFloat(newExpenseAmount))
        let prevIncomeAmount = IncomeAmount.innerHTML
        let newIncomeAmount = new Intl.NumberFormat().format(parseFloat(prevIncomeAmount))
        let TotalAvailableAmount = parseFloat(newIncomeAmount.replace(/,/g, '')) - parseFloat(newExpenseAmount)
        AvailableAmount.innerHTML = new Intl.NumberFormat().format(TotalAvailableAmount)

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

function Reset() {
    Description.value = ''
    Amount.value = ''
    IncomeAmount.innerHTML = "0.00"
    ExpenseAmount.innerHTML = "0.00"
    AvailableAmount.innerHTML = "0.00"
}

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense)
ResetButton.addEventListener('click', Reset)