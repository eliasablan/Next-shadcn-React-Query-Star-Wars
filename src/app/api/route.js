import { NextResponse } from "next/server";

export async function GET() {
  const hola = "Pruebas de shadcn";
  return NextResponse.json({ hola });
}
