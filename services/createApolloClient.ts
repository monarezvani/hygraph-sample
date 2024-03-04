import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clt5rv8jc04og07w4wh87mzzw/master",
    }),
  });
});
