import { bookApi } from '../../api/bookApi';
import { QueryKeys } from '../queryKeys';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const bookQueryOptions = (bookId: number) =>
  queryOptions({
    queryKey: QueryKeys.books,
    queryFn: () => bookApi.get(bookId)
  });

export function useBook(bookId: number) {
  return useQuery(bookQueryOptions(bookId));
}
