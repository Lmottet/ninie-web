import type { CreateSeriesRequest } from '../../types/api/requests/CreateSeriesRequest';
import type { ISeries } from '../../types/api/responses/ISeries';
import axios from 'redaxios';

export const seriesApi = {
  fetch: () => axios.get<ISeries[]>('http://localhost:10000/series').then((e) => e.data),
  create: (request: CreateSeriesRequest) => axios.post<ISeries>('http://localhost:10000/series', request).then((e) => e.data)
};
