import type { CreateBookRequest } from '../../types/api/requests/CreateBookRequest';
import type { IBook } from '../../types/api/responses/IBook';
import axios from 'redaxios';

export const bookApi = {
  fetch: () => axios.get<IBook[]>('http://localhost:10000/books').then((e) => e.data),
  create: (request: CreateBookRequest) => axios.post<IBook>('http://localhost:10000/books', request).then((e) => e.data)
};
