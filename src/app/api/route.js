import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  console.log(999);
  const res = await fetch("https://swapi.dev/api/people/");
  const data = await res?.json()?.results;

  console.log("data");
  console.log(data);
  return NextResponse.json({ data });
}
