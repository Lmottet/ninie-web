import type { IUserSession } from '../../../types/api/responses/IUserSession';
import { API_URL } from '../apiUtils';
import ky from 'ky';

export const userApi = {
  le: async () => await ky.get<IUserSession>(`${API_URL}/me`).json()
};
