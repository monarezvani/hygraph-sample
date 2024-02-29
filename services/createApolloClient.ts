import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_ENDPOINT } from "@/config/endpoints";
import { NextApiRequest, NextApiResponse } from "next";

export const createApolloClient = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: BASE_ENDPOINT,
    cache,
  });

  return client;
};
