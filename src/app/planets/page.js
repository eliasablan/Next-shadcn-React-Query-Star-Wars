import React from "react";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import PlanetsTable from "@/components/tables/PlanetsTable";
import { getPlanets } from "@/utils/lib";

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
