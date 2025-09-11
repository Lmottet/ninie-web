import { authorApi } from '../../api/authorApi';
import { QueryKeys } from '../queryKeys';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const authorsQueryOptions = queryOptions({
  queryKey: QueryKeys.authors,
  queryFn: () => authorApi.fetch()
});

export function useAuthors() {
  return useQuery(authorsQueryOptions);
}
