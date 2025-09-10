import { bookApi } from '../../api/bookApi';
import { QueryKeys } from '../queryKeys';
import { queryOptions } from '@tanstack/react-query';

export const booksQueryOptions = queryOptions({
  queryKey: QueryKeys.books,
  queryFn: () => bookApi.fetch()
});
