import { useGetAllProjectsQuery } from "../graphql/generated";
import { graphqlClientRequest } from "../services/graphql-client";

export function useGetAllProject() {
  const { data, isLoading } = useGetAllProjectsQuery(
    graphqlClientRequest(),
    {},
    {
      onError(err) {},
      onSuccess(data) {},
    }
  );
  return { data, isLoading };
}
