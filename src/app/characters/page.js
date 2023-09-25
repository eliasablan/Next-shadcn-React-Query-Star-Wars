import React from "react";
import getQueryClient from "@/lib/getQueryClient";
import Hydrate from "@/lib/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import CharactersTable from "@/components/tables/Characters";
import { getCharacters } from "@/lib/utils";

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-characters"], getCharacters);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CharactersTable />
    </Hydrate>
  );
};

export default Page;
