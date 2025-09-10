import type { CreateAuthorRequest } from '../../types/api/requests/CreateAuthorRequest';
import type { IAuthor } from '../../types/api/responses/IAuthor';
import axios from 'redaxios';

export const authorApi = {
  fetch: () => axios.get<IAuthor[]>('http://localhost:10000/authors').then((e) => e.data),
  create: (request: CreateAuthorRequest) => axios.post<IAuthor>('http://localhost:10000/authors', request).then((e) => e.data)
};
