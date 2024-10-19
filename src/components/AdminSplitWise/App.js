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
  const [showAddFriend, setShowAddFriend] = useState(false); // Toggle visibility of Add Friend
  const [selectedFriend, setSelectedFriend] = useState(null); // Store the selected friend
  const [showAddExpense, setShowAddExpense] = useState(false); // Toggle visibility of Add Expense form
  const [settleUpAmounts, setSettleUpAmounts] = useState({}); // Track settle-up amounts for each friend
  const [showSettleUp, setShowSettleUp] = useState(false); // Toggle visibility of Settle Up modal
  const [friendToSettle, setFriendToSettle] = useState(null); // Store the selected friend for settling up

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
    setShowAddExpense(false); // Close modal after adding expense
  };

  // Settle Up: Adjust the balance by a partial amount for a specific friend and log the transaction
  const handleSettleUp = () => {
    const settleAmount = parseFloat(settleUpAmounts[friendToSettle] || 0);
    if (!isNaN(settleAmount) && settleAmount > 0) {
      const updatedFriends = friends.map((friend) => {
        if (friend.name === friendToSettle) {
          friend.balance -= settleAmount;
        }
        return friend;
      });

      // Log the settle-up transaction in expenses
      setExpenses([
        ...expenses,
        {
          friend: friendToSettle,
          description: `Settle Up with ${friendToSettle}`,
          amount: settleAmount,
          type: "settle",
        },
      ]);

      setFriends(updatedFriends);
      setSettleUpAmounts({ ...settleUpAmounts, [friendToSettle]: "" }); // Clear the input field
      setShowSettleUp(false); // Close the modal after settle up
    }
  };

  // Handle user login
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  // Handle friend selection for adding expense
  const handleFriendSelection = (friendName) => {
    setSelectedFriend(friendName);
    setShowAddExpense(true); // Show the modal for Add Expense
  };

  // Handle settle-up input changes
  const handleSettleAmountChange = (e) => {
    setSettleUpAmounts({
      ...settleUpAmounts,
      [friendToSettle]: e.target.value,
    });
  };

  // Open Settle Up modal
  const openSettleUpModal = (friendName) => {
    setFriendToSettle(friendName); // Set the friend for settling up
    setShowSettleUp(true); // Show the modal
  };

  // If not logged in, show the login form
  if (!loggedInUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      {/* Navigation with toggle button for Add Friend */}
      <nav className="navbar navbar-light titlesplitequally">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={subaa.src} alt="Logo" width="50" /> Split Equally
          </a>
          <button className="btn btn-primary btn-warning border" onClick={() => setShowAddFriend(!showAddFriend)}>
            {showAddFriend ? "Hide Add Friend" : "Add Friend"}
          </button>
        </div>
      </nav>

      <div className="container mt-1">
        <div align="right">
          <p className="mb-0">Welcome, {loggedInUser}!</p>
        </div>
        {/* Conditionally render Add Friend form */}
        {showAddFriend && <AddFriend onAddFriend={addFriend} />}
        <BalanceSummary friends={friends} onSettleUp={handleSettleUp} />
        {/* Display friend list with balance and option to select a friend */}
        <h5>Friend List</h5>
        <ul className="list-group mb-4">
          {friends.map((friend, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {friend.name}: {friend.balance < 0 ? `You owe $${Math.abs(friend.balance)}` : `Owes you $${Math.abs(friend.balance)}`}
              </span>
              <div>
                {/* Add Expense Button */}
                <button className="btn btn-sm btn-warning" onClick={() => handleFriendSelection(friend.name)}>
                  Add Expense
                </button>

                {/* Settle Up Button */}
                <button className="btn btn-sm btn-success ml-2" onClick={() => openSettleUpModal(friend.name)}>
                  Settle Up
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Expense Modal */}
        <div className={`modal ${showAddExpense ? "d-block" : ""}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Expense for {selectedFriend}</h5>
                <button type="button" className="close" onClick={() => setShowAddExpense(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">{showAddExpense && <AddExpense onAddExpense={addExpense} friends={friends} selectedFriend={selectedFriend} />}</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddExpense(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Settle Up Modal */}
        <div className={`modal ${showSettleUp ? "d-block" : ""}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Settle Up with {friendToSettle}</h5>
                <button type="button" className="close" onClick={() => setShowSettleUp(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="number" className="form-control" placeholder="Enter amount" value={settleUpAmounts[friendToSettle] || ""} onChange={handleSettleAmountChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowSettleUp(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-warning" onClick={handleSettleUp}>
                  Confirm Settle Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
};

export default App;
