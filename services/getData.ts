import React from "react";
import { GET_DATA_QUERY } from "./queries";
import { createApolloClient } from "./createApolloClient";
import { revalidatePath } from "next/cache";
import { Data, GetDataModel } from "@/model/GetDataModel";

export async function getData() {
  const client = createApolloClient();
  const { data, loading, error } = await client.query<Data>({
    query: GET_DATA_QUERY,
  });

  if (data) {
    revalidatePath("/");
  }
  if (loading) {
    return { data: null, loading: true, error: null };
  }

  if (error) {
    return { data: null, loading: false, error };
  }

  return { data, loading: false, error: null };
}
