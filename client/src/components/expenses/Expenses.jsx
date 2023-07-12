import React from 'react'
import ExpenseItem from '../expense_item/ExpenseItem'
import './Expenses.css'

export default function Expenses(props) {
  const {expenselist} = props
  return (
   <div className='expenses'>
      {expenselist.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
   </div>
  )
}
