import React,{useEffect, useState} from 'react'
import ExpenseForm from './expense_form/ExpenseForm'
import Expenses from './expenses/Expenses'

const expenselist=[
]
function MainApp() {

  const [expenses, setExpenses] = useState(expenselist);
useEffect(()=>{
  console.log("updated")
},[expenses])
  const addExpense = async(expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
await fetch('http://localhost:8080/expense/create',{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(expense)
})

    
  };

  console.log(expenses);
  return (
    <><ExpenseForm addExpense={addExpense} /><Expenses expenselist={expenses} /></>
  )
}

export default MainApp
