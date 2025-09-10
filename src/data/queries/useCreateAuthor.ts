import { CreateAuthorRequest } from '../../types/CreateAuthorRequest';
import { authorApi } from '../api/authorApi';
import { QueryKeys } from './queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateAuthor(onSuccess: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: CreateAuthorRequest) => authorApi.create(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.authors });
      onSuccess();
    }
  });
}
