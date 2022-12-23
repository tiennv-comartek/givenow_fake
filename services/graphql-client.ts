import env from "../configs/env";
import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { RequestMiddleware } from "graphql-request/dist/types";
// import { getAuthToken } from "../../helpers/token";

export const endpoint = env.apiEndPoint;

function responseMiddleware(response: any) {
  if (response?.response?.errors[0]?.extensions.code === "UNAUTHORIZED_ERROR") {
    // debouncedNavigate();
  }
}

// todo: check token and refreshToken if need
function requestMiddleware(auth = true) {
  return async function requestMiddleware(request: RequestInit) {
    return {
      ...request,
    };
  };
}

export const graphqlClientRequest = (auth = false, signal?: any) => {
  const headers: any = {};
  if (auth) {
    headers.authorization = auth ? `Bearer` : undefined;
  }
  // @ts-ignore
  return new GraphQLClient(endpoint, {
    headers,
    signal,
    responseMiddleware,
    requestMiddleware: requestMiddleware(auth) as any,
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  graphqlClientRequest,
};
