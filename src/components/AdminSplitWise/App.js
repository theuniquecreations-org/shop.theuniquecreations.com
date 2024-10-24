import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BalanceSummary from "./BalanceSummary";
import Register from "./Register";
import Login from "./Login"; // Import the login component
import subaa from "@/images/subaa.png";
import logout from "@/images/logout.png";
import home from "@/images/home.png";
import { getDataFromServer, fetchUsers, onAddFriendService, onUpdateFriendService } from "./APIService";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the logged-in user's email
  const [loggedInUserName, setLoggedInUserName] = useState(""); // Store the user's name
  const [showAddFriend, setShowAddFriend] = useState(false); // Toggle visibility of Add Friend
  const [selectedFriend, setSelectedFriend] = useState(null); // Store the selected friend
  const [selectedFriendEmail, setSelectedFriendEmail] = useState(null); // Store the selected friend
  const [showAddExpense, setShowAddExpense] = useState(false); // Toggle visibility of Add Expense form
  const [showExpenseList, setShowExpenseList] = useState(false); // Toggle visibility of Expense List
  const [settleUpAmounts, setSettleUpAmounts] = useState({}); // Track settle-up amounts for each friend
  const [showSettleUp, setShowSettleUp] = useState(false); // Toggle visibility of Settle Up modal
  const [friendToSettle, setFriendToSettle] = useState(null); // Store the selected friend for settling up
  const [showRegister, setShowRegister] = useState(false);
  const [friendToSettleName, setFriendToSettleName] = useState(""); // Store friend's name
  const [loading, setLoading] = useState(false);
  // Function to retrieve data from localStorage
  const getDataFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  // Function to save data to localStorage
  const saveDataToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

  // Load session data and friends/expenses from shared storage on login
  useEffect(async () => {
    const sessionUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (sessionUser) {
      setLoggedInUser(sessionUser.email);
      setLoggedInUserName(sessionUser.name);

      // Retrieve the common users data
      //const users = getDataFromStorage("users");
      //const users = await getDataFromServer("users");
      // Find the logged-in user's data
      //const user = users.find((user) => user.email === sessionUser.email);
      // console.log("friends", user);
      // if (user) {
      //   setFriends(user.friends || []);
      //   setExpenses(user.expenses || []);
      // }
    }
  }, [loggedInUser]);

  // Save user data (friends and expenses) to common storage whenever they change
  useEffect(async () => {
    if (loggedInUser) {
      // Get the common users data
      //const users = getDataFromStorage("users");
      const users = await getDataFromServer(loggedInUser);

      // Update the logged-in user's friends and expenses in the common data
      //const updatedUsers = users && users.map((user) => (user.email === loggedInUser ? { ...user, friends, expenses } : user));
      const user = users.find((user) => user.email === loggedInUser);
      const updatedUsers = { ...user, friends, expenses };
      console.log("local users", updatedUsers);
      if (user) {
        setFriends(user.friends || []);
        setExpenses(user.expenses || []);
      }
      //console.log("updatedUsers", updatedUsers);
      //return;
      // Save the updated users data to localStorage
      //if (!showAddFriend) await onUpdateFriendService(updatedUsers);
    }
  }, [loggedInUser]);

  const addFriend = async (friend) => {
    // Check if the friend is already added by email
    const existingFriend = friends.find((f) => f.email === friend.email);

    if (existingFriend) {
      // Show an error message if the friend is already in the list
      alert("This friend is already added.");
      return; // Exit the function to prevent further execution
    }

    // Update the friends array with the new friend immediately
    const updatedFriends = [...friends, { ...friend, balance: 0 }];

    // Update the state with the new friends array (asynchronously)
    setFriends(updatedFriends);

    // Fetch the logged-in user's data from the server
    const users = await getDataFromServer(loggedInUser);
    const user = users.find((user) => user.email === loggedInUser);

    if (user) {
      // Create updated user object with new friends and existing expenses
      const updatedUser = { ...user, friends: updatedFriends, expenses: user.expenses || [] };
      console.log("updatedUser", updatedUser);

      try {
        // Call the service to update the user with the new friends list
        await onUpdateFriendService(updatedUser);
        setShowAddFriend(false); // Close the modal after adding friend
      } catch (error) {
        console.error("Failed to update friend on the server:", error);
      }
    } else {
      console.error("User not found");
    }
  };

  const removeFriend = async (friendEmail) => {
    // Show a confirmation dialog
    const confirmRemoval = window.confirm("Are you sure you want to remove this friend?");

    if (!confirmRemoval) {
      return; // Exit if the user cancels the action
    }

    // Filter out the friend with the given email
    const updatedFriends = friends.filter((friend) => friend.email !== friendEmail);

    // Update the local state
    setFriends(updatedFriends);

    // Fetch the logged-in user's data from the server
    const users = await getDataFromServer(loggedInUser);
    const user = users.find((user) => user.email === loggedInUser);

    if (user) {
      // Create updated user object with new friends list and existing expenses
      const updatedUser = { ...user, friends: updatedFriends, expenses: user.expenses || [] };

      try {
        // Call the service to update the user with the new friends list
        await onUpdateFriendService(updatedUser);
        console.log("Friend removed successfully on the server.");
      } catch (error) {
        console.error("Failed to remove friend on the server:", error);
      }
    } else {
      console.error("User not found");
    }
  };

  const addExpense = async (expense) => {
    // Update the local expenses list
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);

    // Update the friend's balances based on the expense type
    const updatedFriends = friends.map((friend) => {
      if (friend.email === expense.friendEmail) {
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

    // Update the logged-in user's balance
    const updatedFriendsForUser = updatedFriends.map((friend) => {
      if (friend.email === loggedInUser) {
        if (expense.type === "split") {
          friend.balance -= expense.amount / 2; // The user owes half
        } else if (expense.type === "you-paid-full") {
          friend.balance -= expense.amount; // The user owes the full amount
        } else if (expense.type === "friend-paid-full") {
          friend.balance += expense.amount; // The friend owes the full amount
        } else if (expense.type === "friend-paid-split") {
          friend.balance += expense.amount / 2; // The friend owes half
        }
      }
      return friend;
    });

    setFriends(updatedFriendsForUser);

    // Fetch the current logged-in user's data from the server
    const users = await getDataFromServer(loggedInUser);
    const user = users.find((user) => user.email === loggedInUser);

    if (user) {
      // Create an updated user object with the new friends and updated expenses
      const updatedUser = { ...user, friends: updatedFriendsForUser, expenses: updatedExpenses };

      try {
        // Send the updated user data (friends and expenses) to the server
        console.log(updatedUser);
        setLoading(true);
        await onUpdateFriendService(updatedUser);
        setLoading(false);
        setShowAddExpense(false); // Close the expense modal
        console.log("Expense updated successfully on the server.");
      } catch (error) {
        console.error("Failed to update expense on the server:", error);
      }
    } else {
      console.error("User not found");
    }
  };

  const handleSettleUp = async () => {
    const settleAmount = parseFloat(settleUpAmounts[friendToSettle] || 0);

    if (!isNaN(settleAmount) && settleAmount > 0) {
      // Update the balances for the friend being settled up with
      const updatedFriends = friends.map((friend) => {
        if (friend.email === friendToSettle) {
          if (friend.balance > 0) {
            friend.balance -= settleAmount;
          } else if (friend.balance < 0) {
            friend.balance += settleAmount;
          }
        }
        return friend;
      });

      // Get the current date for the expense
      const currentDate = new Date().toLocaleDateString();

      // Add the settle-up entry to the expenses
      const updatedExpenses = [
        ...expenses,
        {
          friend: friendToSettleName,
          description: `Settle Up with ${friendToSettleName}`,
          amount: settleAmount,
          type: "settle",
          date: currentDate,
        },
      ];

      // Update local state with new friends and expenses
      setFriends(updatedFriends);
      setExpenses(updatedExpenses);
      setSettleUpAmounts({ ...settleUpAmounts, [friendToSettle]: "" });
      setShowSettleUp(false);

      // Fetch the current logged-in user's data from the server
      const users = await getDataFromServer(loggedInUser);
      const user = users.find((user) => user.email === loggedInUser);

      if (user) {
        // Create the updated user object with new friends and expenses
        const updatedUser = { ...user, friends: updatedFriends, expenses: updatedExpenses };

        try {
          // Call the service to update the user with the new data
          await onUpdateFriendService(updatedUser);
          console.log("Settle up updated successfully on the server.");
        } catch (error) {
          console.error("Failed to update settle-up on the server:", error);
        }
      } else {
        console.error("User not found");
      }
    }
  };
  // Handle user login (validate against shared storage)
  const handleLogin = (email, name) => {
    const users = getDataFromStorage("users");
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
  const handleFriendSelection = (friendEmail, friendName) => {
    setSelectedFriend(friendName);
    setSelectedFriendEmail(friendEmail);
    setShowAddExpense(true);
  };
  // Handle settle-up input changes
  const handleSettleAmountChange = (e) => {
    setSettleUpAmounts({
      ...settleUpAmounts,
      [friendToSettle]: e.target.value,
    });
  };

  const handleRegister = async (email, name) => {
    //const users = getDataFromStorage("users");
    //const users = await fetchUsers(email);
    //console.log("Registered user", users);
    // const existingUser = users.find((user) => user.email === email);
    //console.log("Registered existingUser", existingUser);
    const newUser = { email, name, friends: [], expenses: [] };
    // users.push(newUser);
    // console.log("Registered user", users);
    await onAddFriendService(newUser);
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

  const openSettleUpModal = (friendEmail, friendName) => {
    const friend = friends.find((f) => f.email === friendEmail);
    const balance = Math.abs(friend.balance); // Get absolute value of balance (owed or owed to)

    setFriendToSettle(friendEmail); // Store friend email to be settled with
    setFriendToSettleName(friendName); // Store the friend's name for display in modal
    setSettleUpAmounts({ ...settleUpAmounts, [friendEmail]: balance.toFixed(2) }); // Pre-fill the input with balance
    setShowSettleUp(true); // Show the modal
  };

  return (
    <>
      {/* Navigation with Add Friend and Logout */}
      <nav className="navbar navbar-light titlesplitequally">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand text-white" href="/adminapphome">
              <img src={home.src} alt="Logo" className="" width="30" />
            </a>
          </div>
          <a className="navbar-brand text-white" href="#">
            <h5 className="mb-0 text-white">Split Equally</h5>
          </a>
          <div>
            <button className="btn btn-primary btn-warning border" onClick={() => setShowAddFriend(true)}>
              Add Friend
            </button>{" "}
          </div>
          <div>
            <a className="navbar-brand text-white" href="#" onClick={handleLogout}>
              <img src={logout.src} alt="Logo" width="25" />
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-1">
        <div align="right">
          <p className="mb-0">
            <small>Welcome, {loggedInUserName}!</small>
          </p>
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
                    <button className="btn btn-sm btn-warning ml-1" onClick={() => handleFriendSelection(friend.email, friend.name)}>
                      Add
                    </button>{" "}
                    {/* Settle Up Button */}
                    {friend.balance == 0 ? (
                      <button className="btn btn-sm btn-danger ml-2" onClick={() => removeFriend(friend.email)}>
                        Remove
                      </button>
                    ) : (
                      <button className="btn btn-sm btn-success ml-2" onClick={() => openSettleUpModal(friend.email, friend.name)}>
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
                  <AddExpense onAddExpense={addExpense} friends={friends} selectedFriend={selectedFriend} selectedFriendEmail={selectedFriendEmail} />
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
