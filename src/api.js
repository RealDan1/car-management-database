import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mongodb-auto.onrender.com', // Base URL for API calls.
  //see if permissions on mongodb could be affecting get requests
});

export default api;
