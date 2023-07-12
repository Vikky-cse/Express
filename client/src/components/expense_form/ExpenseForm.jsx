import { useState } from 'react';
import "./ExpenseForm.css";
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleChange(event) {
    event.preventDefault();

    
    if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
      toast.warn('please fill all the fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    else{
    const obj = {
      id: nanoid(),
      title: title,
      amount: amount,
      date: date
    }
    props.addExpense(obj);
  }
  }

  return (
    <div className="new-expense">
      <form onSubmit={handleChange}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" onChange={e => setDate(e.target.value)} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
          <button type="reset">Cancel Expenses</button>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
        </div>
      </form>
    </div>
  );
}
