import React from "react";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import CharactersTable from "@/components/tables/CharactersTable";
import { getCharacters } from "@/utils/lib";

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
