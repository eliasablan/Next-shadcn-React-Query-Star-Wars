import { NextResponse } from "next/server";

export async function GET(request, route) {
  const homeworldId = route.params.id;
  const url = new URL(`https://swapi.dev/api/planets/${homeworldId}`);
  const response = await fetch(url);
  const data = await response.json();

  return NextResponse.json({ data });
}
