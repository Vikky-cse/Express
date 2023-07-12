import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../expense_date/ExpenseDate";

export default function ExpenseItem(props) {
  const { date, title, amount } = props;
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const updateTitle = () => {
    setUpdatedTitle("Updated");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h1>{updatedTitle}</h1>
        <div className="expense-item__price">${amount}</div>
        <button onClick={updateTitle}>Update</button>
      </div>
    </div>
  );
}

