import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const apiPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const apiGetAll = async (endpoint) => {
  const response = await api.get(endpoint);
  return response;
};

export default api;
