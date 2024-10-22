import React, { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the expenses based on the search term
  const filteredExpenses = expenses.filter((expense) => expense.description.toLowerCase().includes(searchTerm.toLowerCase()) || expense.friend.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container1">
      {/* Search Input */}
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search expenses" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {/* Scrollable Expense List */}
      <div className="expense-list-scrollable rounded">
        <ul className="list-unstyled p-1">
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center border-bottom compact-list-item">
                <div>
                  <strong className="d-block">{expense.description}</strong>
                  <small className="text-muted">{expense.type === "split" ? `You and ${expense.friend} split this equally.` : expense.type === "you-paid-full" ? `You paid the full amount. ${expense.friend} owes you $${expense.amount.toFixed(2)}.` : expense.type === "friend-paid-full" ? `${expense.friend} paid the full amount. You owe ${expense.friend} $${expense.amount.toFixed(2)}.` : expense.type === "friend-paid-split" ? `${expense.friend} paid and you owe half.` : expense.type === "settle" ? `Settle Up: You settled $${expense.amount.toFixed(2)} with ${expense.friend}.` : ""}</small>
                </div>
                <div>
                  <span
                    className={`badge ${
                      expense.type === "friend-owes" || expense.type === "settle" || expense.type === "you-paid-full"
                        ? "bg-success" // Green if friend owes or settle up
                        : "bg-danger" // Red if you owe
                    }`}
                  >
                    ${expense.amount.toFixed(2)}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center py-2">No expenses found</li>
          )}
        </ul>
      </div>

      {/* Styles for Scrollable List */}
      <style jsx>{`
        .expense-list-scrollable {
          max-height: 600px; /* Set the height to make it scrollable */
          overflow-y: auto; /* Enable vertical scrolling */
          border: 1px solid #e3e3e3; /* Add a light border for the scrollable area */
          padding-right: 10px; /* Avoid hiding content behind the scrollbar */
        }

        /* Compact list items by reducing padding and margins */
        .compact-list-item {
          padding: 0.3rem 0; /* Reduce padding */
          margin-bottom: 0; /* Remove bottom margin */
        }

        .compact-list-item strong {
          font-size: 0.9rem; /* Slightly smaller font size */
        }

        .compact-list-item small {
          font-size: 0.8rem; /* Reduce size of small text */
        }

        .badge {
          font-size: 0.85rem; /* Adjust the size of the badge */
        }

        .bg-success {
          background-color: #28a745; /* Green for success */
        }

        .bg-danger {
          background-color: #dc3545; /* Red for danger */
        }
      `}</style>
    </div>
  );
};

export default ExpenseList;
