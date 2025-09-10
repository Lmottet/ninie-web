import { seriesApi } from '../../api/seriesApi';
import { QueryKeys } from '../queryKeys';
import { queryOptions } from '@tanstack/react-query';

export const seriesQueryOptions = queryOptions({
  queryKey: QueryKeys.series,
  queryFn: () => seriesApi.fetch()
});
