import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BalanceSummary from "./BalanceSummary";
import Register from "./Register";
import Login from "./Login"; // Import the login component
import subaa from "@/images/subaa.png";
import logout from "@/images/logout.png";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the logged-in user's email
  const [loggedInUserName, setLoggedInUserName] = useState(""); // Store the user's name
  const [showAddFriend, setShowAddFriend] = useState(false); // Toggle visibility of Add Friend
  const [selectedFriend, setSelectedFriend] = useState(null); // Store the selected friend
  const [showAddExpense, setShowAddExpense] = useState(false); // Toggle visibility of Add Expense form
  const [showExpenseList, setShowExpenseList] = useState(false); // Toggle visibility of Expense List
  const [settleUpAmounts, setSettleUpAmounts] = useState({}); // Track settle-up amounts for each friend
  const [showSettleUp, setShowSettleUp] = useState(false); // Toggle visibility of Settle Up modal
  const [friendToSettle, setFriendToSettle] = useState(null); // Store the selected friend for settling up
  const [showRegister, setShowRegister] = useState(false);

  // Function to retrieve data from localStorage
  const getDataFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

  // Function to save data to localStorage
  const saveDataToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

  // Load session data and friends/expenses from shared storage on login
  useEffect(() => {
    const sessionUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (sessionUser) {
      setLoggedInUser(sessionUser.email);
      setLoggedInUserName(sessionUser.name);

      // Retrieve the common users data
      const users = getDataFromStorage("users");

      // Find the logged-in user's data
      const user = users.find((user) => user.email === sessionUser.email);

      if (user) {
        setFriends(user.friends || []);
        setExpenses(user.expenses || []);
      }
    }
  }, [loggedInUser]);

  // Save user data (friends and expenses) to common storage whenever they change
  useEffect(() => {
    if (loggedInUser) {
      // Get the common users data
      const users = getDataFromStorage("users");

      // Update the logged-in user's friends and expenses in the common data
      const updatedUsers = users.map((user) => (user.email === loggedInUser ? { ...user, friends, expenses } : user));

      // Save the updated users data to localStorage
      saveDataToStorage("users", updatedUsers);
    }
  }, [friends, expenses, loggedInUser]);

  // Add a new friend (includes both name and email)
  const addFriend = (friend) => {
    setFriends([...friends, { ...friend, balance: 0 }]); // Add the new friend and initialize balance to 0
    setShowAddFriend(false); // Close modal after adding friend
  };

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);

    const updatedFriends = friends.map((friend) => {
      if (friend.name === expense.friend) {
        if (expense.type === "split") {
          friend.balance += expense.amount / 2; // The friend owes half
        } else if (expense.type === "you-paid-full") {
          friend.balance += expense.amount; // The friend owes the full amount
        } else if (expense.type === "friend-paid-full") {
          friend.balance -= expense.amount; // You owe the full amount
        } else if (expense.type === "friend-paid-split") {
          friend.balance -= expense.amount / 2; // You owe half
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
          if (friend.balance > 0) {
            friend.balance -= settleAmount;
          } else if (friend.balance < 0) {
            friend.balance += settleAmount;
          }
        }
        return friend;
      });

      const currentDate = new Date().toLocaleDateString();

      setExpenses([
        ...expenses,
        {
          friend: friendToSettle,
          description: `Settle Up with ${friendToSettle}`,
          amount: settleAmount,
          type: "settle",
          date: currentDate,
        },
      ]);

      setFriends(updatedFriends);
      setSettleUpAmounts({ ...settleUpAmounts, [friendToSettle]: "" });
      setShowSettleUp(false);
    }
  };

  // Handle user login (validate against shared storage)
  const handleLogin = (email, name) => {
    const users = getDataFromStorage("users");

    const existingUser = users.find((user) => user.email === email);
    if (!existingUser) {
      alert("Invalid login. Please register.");
      return;
    }

    setLoggedInUser(email);
    setLoggedInUserName(name);
    localStorage.setItem("loggedInUser", JSON.stringify({ email, name }));
  };

  // Handle user logout with confirmation
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedInUser");
      setLoggedInUser(null);
      setLoggedInUserName("");
      setFriends([]);
      setExpenses([]);
    }
  };

  // Handle friend selection for adding expense
  const handleFriendSelection = (friendName) => {
    setSelectedFriend(friendName);
    setShowAddExpense(true);
  };

  // Handle settle-up input changes
  const handleSettleAmountChange = (e) => {
    setSettleUpAmounts({
      ...settleUpAmounts,
      [friendToSettle]: e.target.value,
    });
  };

  const handleRegister = (email, name) => {
    const users = getDataFromStorage("users");
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("User already exists. Please log in.");
      return;
    }

    const newUser = { email, name, friends: [], expenses: [] };
    users.push(newUser);
    saveDataToStorage("users", users);

    setShowRegister(false);
    alert("✅ Registered successfully. Please log in.");
  };

  if (!loggedInUser) {
    return showRegister ? <Register onRegister={handleRegister} onToggleToLogin={() => setShowRegister(false)} /> : <Login onLogin={handleLogin} onToggleToRegister={() => setShowRegister(true)} />;
  }
  // Toggle Expense List sliding up
  const toggleExpenseList = () => {
    setShowExpenseList(!showExpenseList);
  };

  // Close Expense List when clicking outside (optional)
  const closeExpenseListOnClickOutside = (e) => {
    if (e.target.classList.contains("slide-up-expense-list")) {
      setShowExpenseList(false);
    }
  };

  return (
    <>
      {/* Navigation with Add Friend and Logout */}
      <nav className="navbar navbar-light titlesplitequally">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={subaa.src} alt="Logo" width="50" /> Split Equally
          </a>
          <div>
            <button className="btn btn-primary btn-warning border" onClick={() => setShowAddFriend(true)}>
              Add Friend
            </button>{" "}
          </div>
          <div>
            <a className="navbar-brand text-white" href="#" onClick={handleLogout}>
              <img src={logout.src} alt="Logo" width="30" />
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-1">
        <div align="right">
          <p className="mb-0">Welcome, {loggedInUserName}!</p>
        </div>
        <BalanceSummary friends={friends} onSettleUp={handleSettleUp} />
        {/* Display friend list with balance and option to select a friend */}
        <h6 className="mb-0">Friend List</h6>
        <ul className="list-group mb-4">
          {friends.length != 0
            ? friends.map((friend, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <small>
                    {friend.name.toUpperCase()}: {friend.balance == 0 ? "No Balance" : friend.balance < 0 ? <span className="text-danger">You owe ${Math.abs(friend.balance)}</span> : <span className="text-success">Owes you ${Math.abs(friend.balance)}</span>}
                  </small>
                  <div>
                    {/* Add Expense Button */}
                    <button className="btn btn-sm btn-warning ml-1" onClick={() => handleFriendSelection(friend.name)}>
                      Add
                    </button>{" "}
                    {/* Settle Up Button */}
                    {friend.balance == 0 ? (
                      ""
                    ) : (
                      <button className="btn btn-sm btn-success ml-2" onClick={() => openSettleUpModal(friend.name)}>
                        Settle
                      </button>
                    )}
                  </div>
                </li>
              ))
            : "Please add friends to split the bill."}
        </ul>

        {/* Add Friend Modal */}
        {showAddFriend && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add a New Friend</h5>
                </div>
                <div className="modal-body">
                  <AddFriend onAddFriend={addFriend} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowAddFriend(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Expense Modal */}
        {showAddExpense && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title">Add Expense for {selectedFriend}</h6>
                </div>
                <div className="modal-body">
                  <AddExpense onAddExpense={addExpense} friends={friends} selectedFriend={selectedFriend} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowAddExpense(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settle Up Modal */}
        {showSettleUp && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content grid">
                <div className="modal-header">
                  <h6 className="modal-title">Settle Up with {friendToSettle}</h6>
                </div>
                <div className="modal-body">
                  <input type="number" className="form-control" placeholder="Enter amount" value={settleUpAmounts[friendToSettle] || ""} onChange={handleSettleAmountChange} step="any" min="0" inputMode="decimal" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning w-100" onClick={handleSettleUp}>
                    Confirm Settle Up
                  </button>
                </div>
                <button type="button" className="btn btn-secondary" onClick={() => setShowSettleUp(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Expense List Sliding Up from Bottom */}
        <div className="text-center">
          <button className="btn btn-warning mt-3" onClick={toggleExpenseList}>
            {showExpenseList ? "Hide Expense History" : "View Expense History"}
          </button>
        </div>

        <div className={`slide-up-expense-list ${showExpenseList ? "show" : ""}`} onClick={closeExpenseListOnClickOutside}>
          <div className="container p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-3">Expense List</h6>
              <button className="btn btn-secondary btn-sm" onClick={toggleExpenseList}>
                Close
              </button>
            </div>
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>

      {/* Styles for the modals and slide-up */}
      <style jsx>{`
        /* Modal Overlay for Background Fade */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Faded background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        /* Modal Container for centering */
        .modal-container {
          background: white;
          padding: 20px;
          width: 100%;
          max-width: 500px;
          border-radius: 8px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        }

        .modal-content .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Slide-up Expense List */
        .slide-up-expense-list {
          position: fixed;
          bottom: -100%;
          left: 0;
          width: 100%;
          background: white;
          height: 90%;
          transition: bottom 0.3s ease-in-out;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1050;
        }

        .slide-up-expense-list.show {
          bottom: 0;
        }
      `}</style>
    </>
  );
};

export default App;
