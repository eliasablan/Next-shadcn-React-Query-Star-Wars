import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { updateCharacters } from "@/reducers/starWarsSlice";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function fetchCharacters(dispatch) {
  try {
    console.log("🟡 Started fetching characters");
    const response = await axios.get("https://swapi.dev/api/people");
    const characters = response.data;
    const tableData = characters.results.map((character) => {
      const homeworld = fetchPlanet(character.homeworld);
      return {
        name: character.name,
        birth_year: character.birth_year,
        homeworld: homeworld,
      };
    });
    console.log("🟡 characters fetched");
    if (tableData) {
      console.log("🟡 1");
      dispatch(updateStarWarsCharacters(tableData));
      console.log("🟢store SWcharacters updated", tableData);
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchPlanet(url) {
  const response = await axios.get(url);
  return response.data.name;
}
