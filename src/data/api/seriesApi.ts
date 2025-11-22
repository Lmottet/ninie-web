import type { CreateSeriesRequest } from '../../types/api/requests/CreateSeriesRequest';
import type { ISeries } from '../../types/api/responses/ISeries';
import { API_URL } from './apiUtils';
import ky from 'ky';

export const seriesApi = {
  fetch: async () => await ky.get<ISeries[]>(`${API_URL}/series`).json(),
  create: async (request: CreateSeriesRequest) => await ky.post<ISeries>(`${API_URL}/series`, { json: request }).json()
};
