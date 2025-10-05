import type { LoginRequest } from '../../types/api/requests/LoginRequest';
import axios from 'redaxios';

export const loginApi = {
  login: (request: LoginRequest) => axios.post<string>('http://localhost:10000/books', request).then((e) => e.data)
};
