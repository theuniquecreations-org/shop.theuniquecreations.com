import React, { useState } from "react";

const AddExpense = ({ onAddExpense, friends }) => {
  const [friend, setFriend] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseType, setExpenseType] = useState("split"); // New state for dropdown

  const handleSubmit = (e) => {
    e.preventDefault();
    if (friend === "" || amount === "" || description === "") return;

    // Prepare the expense object with the type of expense selected (split, you need to pay, your friend will pay)
    const expense = {
      friend,
      description,
      amount: parseFloat(amount),
      type: expenseType,
    };

    onAddExpense(expense);
    setFriend("");
    setDescription("");
    setAmount("");
    setExpenseType("split");
  };

  return (
    <form onSubmit={handleSubmit} className="grid px-0">
      <select value={friend} onChange={(e) => setFriend(e.target.value)}>
        <option value="">Select Friend</option>
        {friends.map((f, index) => (
          <option key={index} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

      {/* Dropdown to choose the type of split */}
      <select value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
        <option value="split">Split Equally</option>
        <option value="owe">You need to pay</option>
        <option value="friend-owes">Your friend will pay</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
