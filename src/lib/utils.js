import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getCharacters = async () => {
  const url = new URL("https://swapi.dev/api/people/");
  const response = await fetch(url);
  const characters = await response.json();

  return characters;
};

export const getFilms = async () => {
  const url = new URL("https://swapi.dev/api/films/");
  const response = await fetch(url);
  const films = await response.json();

  return films;
};

export const getPlanets = async () => {
  const url = new URL("https://swapi.dev/api/planets/");
  const response = await fetch(url);
  const planets = await response.json();
  
  return planets;
};

export const getPlanet = async (homeworldId) => {
  const url = new URL(`https://swapi.dev/api/planets/${homeworldId}`);
  const response = await fetch(url);
  const planet = await response.json();

  return planet;
};
