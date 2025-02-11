import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div>{date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{date.getFullYear()}</div>
        <div>{date.getDate()}</div>
      </div>
      <div className="expense-description">
        <h2>{title}</h2>
        <div className="expense-amount">${amount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
