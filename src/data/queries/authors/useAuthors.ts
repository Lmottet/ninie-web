import { authorApi } from '../../api/authorApi';
import { QueryKeys } from '../queryKeys';
import { queryOptions } from '@tanstack/react-query';

export const authorsQueryOptions = queryOptions({
  queryKey: QueryKeys.authors,
  queryFn: () => authorApi.fetch()
});
