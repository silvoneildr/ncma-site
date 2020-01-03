import axios from 'axios';
import app from '../main';

let instance; // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  instance = axios.create({
    baseURL: '/api',
  });
} else {
  instance = axios.create();
}

instance.interceptors.request.use((config) => {
  app.$Progress.start();
  return config;
});

instance.interceptors.response.use((response) => {
  app.$Progress.finish();
  return response.data;
}, (error) => {
  if (error.response.status === 401) {
    instance.get('login').then((url) => {
      window.location.href = url;
    }).catch(error => error);
  }
  app.$Progress.fail();
  return Promise.reject(error.response.data);
});

export default instance;
