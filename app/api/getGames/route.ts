import { NextResponse } from "next/server";
import db from "../../../db/db";

export async function GET() {
  try {
    const stmt = db.prepare("SELECT * FROM games");
    const games = stmt.all();
    return NextResponse.json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { message: "Error fetching games" },
      { status: 500 }
    );
  }
}
