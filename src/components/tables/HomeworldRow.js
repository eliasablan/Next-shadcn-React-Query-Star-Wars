"use client";
import { useQuery } from "@tanstack/react-query";

import { getPlanet } from "@/lib/utils";

const CharactersTableRow = ({ row }) => {
  const homeworldURL = row.getValue("homeworld");
  const homeworldId = homeworldURL.split("/")[5];
  const { data } = useQuery({
    queryKey: ["hydrate-planet", homeworldId],
    queryFn: () => getPlanet(homeworldId),
  });

  if (!data) {
    return <div className="capitalize">{row.getValue("homeworld")}</div>;
  }
  return <div className="capitalize">{data.name}</div>;
};

export default CharactersTableRow;
