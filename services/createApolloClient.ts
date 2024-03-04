import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { BASE_ENDPOINT } from "@/config/Endpoints";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: BASE_ENDPOINT,
    }),
  });
});
