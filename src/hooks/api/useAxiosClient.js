import React from "react";
import { useAxios } from "use-axios-client";

export default function AppUseAxiosClient() {
  /* use-axios-client below*/
  const { data, error, loading } = useAxios("https://httpstat.us/200?sleep=2000");
  /* use-axios-client above*/

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{data && <h2>{data.description}</h2>}</div>;
}
