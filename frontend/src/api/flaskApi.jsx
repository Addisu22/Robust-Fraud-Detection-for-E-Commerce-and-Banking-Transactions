import axios from "axios";

const API_URL = "http://localhost:5000"; // Your Flask backend URL

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data; // returns array of transaction objects
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};
