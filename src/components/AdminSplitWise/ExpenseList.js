import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h5>Expense List</h5>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.description}</strong> - ${expense.amount.toFixed(2)}: {expense.type === "split" ? `You and ${expense.friend} split this equally.` : expense.type === "owe" ? `You paid the full amount. You owe ${expense.friend} $${expense.amount.toFixed(2)}.` : expense.type === "friend-owes" ? `${expense.friend} paid the full amount. They owe you $${expense.amount.toFixed(2)}.` : expense.type === "settle" ? `Settle Up: You settled $${expense.amount.toFixed(2)} with ${expense.friend}.` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
