import { CharactersTableSecond } from "@/components/CharactersTableSecond";

export default async function Page() {
  const fetchData = await fetch("http://localhost:3000/api/hello/");
  const charactersBody = await fetchData.json();
  const characters = charactersBody.data;

  return (
    <>
      <CharactersTableSecond charactersData={characters} />
    </>
  );
}
