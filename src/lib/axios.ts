import axios from 'axios';

const api = axios.create({
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;
