import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authorApi } from "../api/authorApi";
import { CreateAuthorRequest } from "../../types/CreateAuthorRequest";
import { QueryKeys } from "./queryKeys";

export function useCreateAuthor(onSuccess: () => void) {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (request: CreateAuthorRequest) => authorApi.create(request),
    onSuccess: () => {
        queryClient .invalidateQueries({queryKey: QueryKeys.authors})
      onSuccess();
    },
  });
}
