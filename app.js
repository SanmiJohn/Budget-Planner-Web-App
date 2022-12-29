const IncomeButton = document.getElementById('incomebtn');
const ExpenseButton = document.getElementById('expensebtn');
let Description = document.getElementById('description')
let Amount = document.getElementById('amount')
const LI = document.getElementById('incomeadded')
const LII = document.getElementById('expenseadded')
let New = document.createElement('div')
New.style.backgroundColor = 'white'
New.style.width = '16rem'
New.style.height = '2rem'
New.style.borderRadius = '10px'

function Income() {
    let Neeew = LI.append(New)
    Neeew.append(Description.value)
    // LI.append(Amount.value)
    // Description.value = ''
    // Amount.value = ''
}

function Expense() {
    let Neew = LII.append(New)
    Neew.append(Description.value)
    // LI.append(Amount.value)
    // Description.value = ''
    // Amount.value = ''
}

IncomeButton.addEventListener('click', Income)
ExpenseButton.addEventListener('click', Expense) 