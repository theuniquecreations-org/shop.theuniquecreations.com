import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with your actual backend API base URL

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
