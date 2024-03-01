import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { NextApiRequest, NextApiResponse } from "next";
import { BASE_ENDPOINT } from "@/config/Endpoints";

import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: BASE_ENDPOINT,
    }),
  });
});
