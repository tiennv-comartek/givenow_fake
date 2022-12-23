import "../styles/app.scss";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 1000,
    },
  },
  queryCache: new QueryCache({
    // onError: (error) => isErrorUnauthorized(error),
  }),
  mutationCache: new MutationCache({
    // onError: (error) => isErrorUnauthorized(error),
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
