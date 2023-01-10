import { ProjectV1Status, useGetAllProjectsQuery } from "../graphql/generated";
import { graphqlClientRequest } from "../services/graphql-client";

export function useGetAllProject(status?: ProjectV1Status) {
  const { data, isLoading } = useGetAllProjectsQuery(
    graphqlClientRequest(),
    { status },
    {
      onError(err) {},
      onSuccess(data) {},
    }
  );
  return { data, isLoading };
}
