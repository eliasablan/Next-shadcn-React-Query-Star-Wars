import { NextResponse } from "next/server";

export async function GET() {
  const url = new URL("https://swapi.dev/api/people/");
  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json({ data });
}
