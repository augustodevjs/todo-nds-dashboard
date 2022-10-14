import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const api = axios.create({
  baseURL: 'https://api.todo.maracanau.ifce.edu.br',
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { api };
