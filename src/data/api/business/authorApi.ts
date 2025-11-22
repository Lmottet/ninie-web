import type { CreateAuthorRequest } from '../../types/api/requests/CreateAuthorRequest';
import type { IAuthor } from '../../types/api/responses/IAuthor';
import ky from 'ky';
import { API_URL } from './apiUtils';

export const authorApi = {
  fetch: async () => await ky.get<IAuthor[]>(`${API_URL}/authors`).json(),
  create: async (request: CreateAuthorRequest) => await ky.post<IAuthor>(`${API_URL}/authors`, { json: request }).json()
};
