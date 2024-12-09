import axios from 'axios';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Base API URL
  headers: {
    'Content-Type': 'application/json', // Default header for JSON
  },
});

// Add a request interceptor (optional, for logging or modifying requests globally)
api.interceptors.request.use(
  (config) => {
    console.log(`[Request] ${config.method.toUpperCase()} - ${config.url}`, config);
    return config;
  },
  (error) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional, for logging or error handling globally)
api.interceptors.response.use(
  (response) => {
    console.log(`[Response] ${response.status} - ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error('[Response Error]', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
