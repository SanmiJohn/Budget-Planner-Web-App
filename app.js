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

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense)

function Income() {
    if (Description.value && Amount.value) {

        IncomeBar.classList.add('incomeadded')

        let newDescriptionSpan = document.createElement('span')
        let newAmountSpan = document.createElement('span')
        newDescriptionSpan.innerText = Description.value
        newAmountSpan.innerText = Amount.value
        newDescriptionSpan.classList.add('descriptionspan')
        newDescriptionSpan.classList.add('amountspan')

        IncomeBar.append(newDescriptionSpan)
        IncomeBar.append(newAmountSpan)

        let prevIncomeAmount = IncomeAmount.innerHTML
        let newIncomeAmount = parseInt(prevIncomeAmount) + parseInt(Amount.value)
        IncomeAmount.innerHTML = newIncomeAmount
        let prevExpenseAmount = ExpenseAmount.innerHTML
        let newExpenseAmount = parseInt(prevExpenseAmount)
        let TotalAvailableAmount = (parseInt(newIncomeAmount) - parseInt(newExpenseAmount))
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

        ExpenseBar.classList.add('expenseadded')

        let newDescriptionSpan = document.createElement('span')
        let newAmountSpan = document.createElement('span')
        newDescriptionSpan.innerText = Description.value
        newAmountSpan.innerText = Amount.value
        newDescriptionSpan.classList.add('descriptionspan')
        newDescriptionSpan.classList.add('amountspan')

        ExpenseBar.append(newDescriptionSpan)
        ExpenseBar.append(newAmountSpan)

        let prevExpenseAmount = ExpenseAmount.innerHTML
        let newExpenseAmount = parseInt(prevExpenseAmount) + parseInt(Amount.value)
        ExpenseAmount.innerHTML = newExpenseAmount
        let prevIncomeAmount = IncomeAmount.innerHTML
        let newIncomeAmount = parseInt(prevIncomeAmount)
        let TotalAvailableAmount = (parseInt(newIncomeAmount) - parseInt(newExpenseAmount))
        AvailableAmount.innerHTML = TotalAvailableAmount

        Description.value = ''
        Amount.value = ''
    }
    else if (Description.value) {
        alert('Input Amount')
    } else if (Amount.value) {
        alert('Input Description')
    } else if (Amount.value != String) {
        alert('Input a Number')
    } else {
        alert('Input Description and Amount')
    }
}
