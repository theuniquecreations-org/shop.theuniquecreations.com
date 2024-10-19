import React, { useState, useEffect } from "react";

const AddExpense = ({ onAddExpense, friends, selectedFriend }) => {
  const [friend, setFriend] = useState(selectedFriend || "");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseType, setExpenseType] = useState("split");

  // Update the selected friend if the prop changes
  useEffect(() => {
    setFriend(selectedFriend);
  }, [selectedFriend]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (friend === "" || amount === "" || description === "") return;

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
    <form onSubmit={handleSubmit} className="grid">
      {/* Friend selection dropdown */}
      <select value={friend} onChange={(e) => setFriend(e.target.value)} className="form-control">
        <option value="">Select Friend</option>
        {friends.map((f, index) => (
          <option key={index} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>

      {/* Description input */}
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control mt-2" />

      {/* Amount input */}
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control mt-2" />

      {/* Expense Type dropdown */}
      <select value={expenseType} onChange={(e) => setExpenseType(e.target.value)} className="form-control mt-2">
        <option value="split">{friend ? `Split Equally between You and ${friend}` : "Split Equally"}</option>
        <option value="owe">You need to pay the full amount</option>
        <option value="friend-owes">{friend ? `${friend} will pay the full amount` : "Your friend will pay the full amount"}</option>
      </select>

      <button type="submit" className="btn btn-warning mt-3">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
