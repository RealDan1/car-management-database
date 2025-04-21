import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mongodb-auto.onrender.com', // Base URL for API calls.
});

export default api;
