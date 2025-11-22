import type { CreateBookRequest } from '../../types/api/requests/CreateBookRequest';
import type { IBook } from '../../types/api/responses/IBook';
import { API_URL } from './apiUtils';
import ky from 'ky';

export const bookApi = {
  fetch: async () => await ky.get<IBook[]>(`${API_URL}/books`).json(),
  get: async (id: number) => await ky.get<IBook>(`${API_URL}/books/${id}`).json(),

  create: async (request: CreateBookRequest) => await ky.post<IBook>(`${API_URL}/books`, { json: request }).json()
};
