import type { LoginRequest } from '../../types/api/requests/LoginRequest';
import ky from 'ky';
import { API_URL } from './apiUtils';

export const loginApi = {
  login: async (request: LoginRequest) => await ky.post<string>(`${API_URL}/login`, { json: request }).json()
};
