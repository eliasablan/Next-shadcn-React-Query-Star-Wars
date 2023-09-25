import React from "react";
import getQueryClient from "@/lib/getQueryClient";
import Hydrate from "@/lib/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import FilmsTable from "@/components/tables/FilmsTable";
import { getFilms } from "@/lib/utils";

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-films"], getFilms);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <FilmsTable />
    </Hydrate>
  );
};

export default Page;
