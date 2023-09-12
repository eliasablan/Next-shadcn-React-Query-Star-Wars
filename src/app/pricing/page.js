"use client";

import { useSWCharacters } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const { data, isLoading, isError } = useSWCharacters();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (data) setCharacters(data.results);
  }, [data]);

  console.log("useEffect", data);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      {characters.map((character) => (
        <p key={character.name}>{character.name}</p>
      ))}
    </div>
  );
}
