import React, { useRef } from "react";

const NewExpense = ({ onAddExpense }) => {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: titleRef.current.value,
      amount: +amountRef.current.value,
      date: new Date(dateRef.current.value),
    };

    onAddExpense(expenseData);

    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className="new-expense">
      <div className="new-expense__controls">
        <input type="text" placeholder="Title" ref={titleRef} required />
        <input type="number" placeholder="Amount" ref={amountRef} required />
        <input type="date" ref={dateRef} required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default NewExpense;
