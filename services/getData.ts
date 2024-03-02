import { GET_DATA_QUERY } from "./queries";
import { client } from "./createApolloClient";
import { DataModel } from "@/model/GetDataModel";
export async function getData() {
  const { data, loading, error } = await client.query<DataModel>({
    query: GET_DATA_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  if (loading) {
    return { data: null, loading: true, error: null };
  }

  if (error) {
    return { data: null, loading: false, error };
  }

  return { data, loading: false, error: null };
}
