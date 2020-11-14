import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  readOnError: false,
});

const api = axios.create({
  baseURL: 'https://api.github.com',
  adapter: cache.adapter,
});

export default api;
