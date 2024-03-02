import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { NextApiRequest, NextApiResponse } from "next";
import { BASE_ENDPOINT } from "@/config/Endpoints";

import { HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: BASE_ENDPOINT,
  }),
});
