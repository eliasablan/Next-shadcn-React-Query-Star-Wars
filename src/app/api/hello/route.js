import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://swapi.dev/api/people/", {
    cache: "no-store"
  });

  const data = await res.json();
  return NextResponse.json({ data });
}
