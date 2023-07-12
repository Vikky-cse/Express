import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
    const {date} = props
    const datenew = new Date(date)
    const day = datenew.getDate()
    const month =datenew.toLocaleDateString('US-en',{month:"long"})
    const year = datenew.toLocaleDateString('US-en',{year:"numeric"})
  return (
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
  )
}



export default ExpenseDate
