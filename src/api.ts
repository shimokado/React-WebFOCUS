
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // 適切なAPIのベースURLに置き換えてください

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};

export default api;