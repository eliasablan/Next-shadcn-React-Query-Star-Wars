import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const getCharacters = async () => {
  const url = new URL("https://swapi.dev/api/people/");
  const response = await fetch(url);
  const characters = await response.json();

  return characters;
};

const getPlanet = async (homeworldId) => {
  const url = new URL(`https://swapi.dev/api/planets/${homeworldId}`);
  const response = await fetch(url);
  const planet = await response.json();

  return planet;
};

export { getCharacters, getPlanet };
