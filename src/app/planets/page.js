import React from "react";
import getQueryClient from "@/lib/getQueryClient";
import Hydrate from "@/lib/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import PlanetsTable from "@/components/tables/PlanetsTable";
import { getPlanets } from "@/lib/utils";

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-planets"], getPlanets);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PlanetsTable />
    </Hydrate>
  );
};

export default Page;
