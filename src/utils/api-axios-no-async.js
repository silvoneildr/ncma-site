import axios from 'axios';

let instance; // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  instance = axios.create({
    baseURL: '/api',
  });
} else {
  instance = axios.create();
}

instance.interceptors.response.use(response => response.data, error => Promise.reject(error.response.data));

export default instance;
