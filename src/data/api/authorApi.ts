import axios from "redaxios";
import { IAuthor } from "../../types/IAuthor";
import { CreateAuthorRequest } from "../../types/CreateAuthorRequest";

export const authorApi = {
  fetch: () => axios.get<IAuthor[]>("http://localhost:10000/authors").then(e => e.data),
  create: (request : CreateAuthorRequest) => axios.post<IAuthor>("http://localhost:10000/authors", request).then(e => e.data),
};
