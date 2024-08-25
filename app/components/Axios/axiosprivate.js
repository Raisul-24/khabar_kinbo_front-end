// components/Axios/axiosPrivate.js
import axios from 'axios';

export const axiosPrivate = axios.create({
  baseURL: 'http://localhost:51000/api', // Ensure this is correct
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // If you're using cookies for authentication
});

// Optional: Add interceptors to handle responses and errors globally
axiosPrivate.interceptors.response.use(
  response => response,
  error => {
    // You can handle common error scenarios here
    return Promise.reject(error);
  }
);
