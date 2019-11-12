import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.200.215:3000',
});

export default api;
