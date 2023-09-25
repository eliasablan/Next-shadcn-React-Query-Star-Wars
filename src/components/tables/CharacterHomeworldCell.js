"use client";
import { useQuery } from "@tanstack/react-query";

import { getPlanet } from "@/lib/utils";

const CharacterHomeworldCell = ({ row }) => {
  const homeworldURL = row.getValue("homeworld");
  const homeworldId = homeworldURL.split("/")[5];
  const { data, status } = useQuery({
    queryKey: ["hydrate-planet", homeworldId],
    queryFn: () => getPlanet(homeworldId),
  });

  return (
    <div className="capitalize">
      {status === "success" ? data.name : "Loading"}
    </div>
  );
};

export default CharacterHomeworldCell;
