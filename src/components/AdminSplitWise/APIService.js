import axios from "axios";
import uuid from "react-uuid";
const API_BASE_URL = "http://localhost:5000/api"; // Replace with your actual backend API base URL

// Save new expense to the server
export const saveUser = async (user) => {
  try {
    user.id = uuid();
    user.type = "appusers";
    console.log(user);
    await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user saved");
  } catch (err) {
    console.log("Error saving expense: ", err);
    throw err;
  } finally {
    return 200;
  }
};

export const onAddFriendService = async (user) => {
  try {
    user.id = uuid();
    user.type = "usersfriend";
    console.log(user);
    await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user and balance saved");
  } catch (err) {
    console.log("Error saving expense: ", err);
    throw err;
  } finally {
    return 200;
  }
};

export const onUpdateFriendService = async (user) => {
  try {
    user.type = "usersfriend";
    console.log("onUpdateFriendService", user);
    await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log("user and balance updated");
  } catch (err) {
    console.log("Error saving expense: ", err);
    throw err;
  } finally {
    return 200;
  }
};

export const getDataFromServer = async (email) => {
  try {
    console.log(email);
    const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "itemsbytype/usersfriend");
    ///items/{column}/{value}
    const data = await response.json();
    // Filter the user by email
    // Return the matched user or null if not found
    return data;
  } catch (err) {
    console.log("Error getting users: ", err);
    throw err; // Re-throw the error to handle it outside
  }
};

export const fetchUsers = async (email) => {
  try {
    console.log(email);
    const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "itemsbytype/appusers");
    ///items/{column}/{value}
    const data = await response.json();
    // Filter the user by email
    const user = data.find((user) => user.email === email);
    // Return the matched user or null if not found
    return user || null;
  } catch (err) {
    console.log("Error getting users: ", err);
    throw err; // Re-throw the error to handle it outside
  }
};

// Add a new friend
export const addUser = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/friends`, { name: friendName });
    return response.data;
  } catch (error) {
    console.error("Error adding friend:", error);
    throw error;
  }
};

// Get all friends
export const getFriends = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/friends`);
    return response.data;
  } catch (error) {
    console.error("Error fetching friends:", error);
    throw error;
  }
};

// Add a new friend
export const addFriend = async (friendName) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/friends`, { name: friendName });
    return response.data;
  } catch (error) {
    console.error("Error adding friend:", error);
    throw error;
  }
};

// Delete a friend
export const deleteFriend = async (friendId) => {
  try {
    await axios.delete(`${API_BASE_URL}/friends/${friendId}`);
  } catch (error) {
    console.error("Error deleting friend:", error);
    throw error;
  }
};

// Get all expenses
export const getExpenses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

// Add a new expense
export const addExpense = async (expense) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses`, expense);
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};

// Delete an expense
export const deleteExpense = async (expenseId) => {
  try {
    await axios.delete(`${API_BASE_URL}/expenses/${expenseId}`);
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};
