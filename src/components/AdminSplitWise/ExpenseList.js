import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h5>Expense List</h5>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.description}</strong> - ${expense.amount.toFixed(2)}: {expense.type === "split" ? `You and ${expense.friend} split this equally` : expense.type === "owe" ? `You need to pay ${expense.friend} $${expense.amount.toFixed(2)}` : `${expense.friend} will pay you $${expense.amount.toFixed(2)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
