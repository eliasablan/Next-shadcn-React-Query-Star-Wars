import React from "react";
import getQueryClient from "@/lib/getQueryClient";
import Hydrate from "@/lib/hydrate.client";
import { dehydrate } from "@tanstack/react-query";

import CharactersTable from "@/components/tables/Characters";
import { getCharacters, getPlanet } from "@/lib/utils";

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-characters"], getCharacters);
  // queryClient.queryCache.queries[0].state.data.results.forEach(
  //   async (character) => {
  //     const homeworldId = character.homeworld.split("/")[5];
  //     await queryClient.prefetchQuery(
  //       ["hydrate-homeworld", homeworldId],
  //       getPlanet(homeworldId)
  //     );
  //   }
  // );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CharactersTable />
    </Hydrate>
  );
};

export default Page;
