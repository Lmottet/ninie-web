import { queryOptions } from "@tanstack/react-query";
import { authorApi } from "../api/authorApi";
import { QueryKeys } from "./queryKeys";

export const authorsQueryOptions = queryOptions({
  queryKey:QueryKeys.authors,
  queryFn: () => authorApi.fetch(),
});
