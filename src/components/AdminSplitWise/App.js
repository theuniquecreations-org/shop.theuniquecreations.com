import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BalanceSummary from "./BalanceSummary";
import Login from "./Login"; // Import the login component
import subaa from "@/images/subaa.png";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the logged-in user

  // Load user data from localStorage
  useEffect(() => {
    if (loggedInUser) {
      const storedFriends = JSON.parse(localStorage.getItem(`${loggedInUser}_friends`));
      const storedExpenses = JSON.parse(localStorage.getItem(`${loggedInUser}_expenses`));
      setFriends(storedFriends || []);
      setExpenses(storedExpenses || []);
    }
  }, [loggedInUser]);

  // Save user data to localStorage when friends or expenses change
  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem(`${loggedInUser}_friends`, JSON.stringify(friends));
      localStorage.setItem(`${loggedInUser}_expenses`, JSON.stringify(expenses));
    }
  }, [friends, expenses, loggedInUser]);

  // Add a new friend
  const addFriend = (friendName) => {
    setFriends([...friends, { name: friendName, balance: 0 }]);
  };

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);

    const updatedFriends = friends.map((friend) => {
      if (friend.name === expense.friend) {
        if (expense.type === "split") {
          // Split equally: each person owes half
          friend.balance += expense.amount / 2;
        } else if (expense.type === "owe") {
          // You owe: you owe the full amount
          friend.balance += expense.amount;
        } else if (expense.type === "friend-owes") {
          // Friend owes: your friend owes the full amount
          friend.balance -= expense.amount;
        }
      }
      return friend;
    });
    setFriends(updatedFriends);
  };

  // Settle Up: Adjust the balance by a partial amount for a specific friend and log the transaction
  const handleSettleUp = (friendName, settleAmount) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.name === friendName) {
        // Adjust balance by the settle amount
        friend.balance -= settleAmount;
      }
      return friend;
    });

    // Log the settle-up transaction in expenses
    setExpenses([
      ...expenses,
      {
        friend: friendName,
        description: `Settle Up with ${friendName}`,
        amount: settleAmount,
        type: "settle",
      },
    ]);

    setFriends(updatedFriends);
  };

  // Handle user login
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  // If not logged in, show the login form
  if (!loggedInUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <div className="px-3 py-1 text-primary font-size-large titlesplitequally ">
        <span className="text-light">Split Equally</span> <img src={subaa.src} width="50" />
      </div>
      <div className="container">
        <h6 className="mb-0">Welcome, {loggedInUser}!</h6>
        <AddFriend onAddFriend={addFriend} />
        <AddExpense onAddExpense={addExpense} friends={friends} />
        <BalanceSummary friends={friends} onSettleUp={handleSettleUp} />
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
};

export default App;
