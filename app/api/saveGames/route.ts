import { NextRequest, NextResponse } from "next/server";
import db from "../../../db/db";

interface Game {
  id: number;
  title: string;
  totalDuration: string;
  remaining: string;
  timeEstimate: string;
  completionDate: string;
}

export async function POST(request: NextRequest) {
  const gamesData: Game[] = await request.json();

  const insertStmt = db.prepare(`
    INSERT INTO games (id, title, totalDuration, remaining, timeEstimate, completionDate)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  try {
    const insertMany = db.transaction((games: Game[]) => {
      for (const game of games) {
        insertStmt.run(
          game.id,
          game.title,
          game.totalDuration,
          game.remaining,
          game.timeEstimate,
          game.completionDate
        );
      }
    });

    insertMany(gamesData);
    return NextResponse.json({ message: "Games saved successfully" });
  } catch (error) {
    console.error("Error saving games:", error);
    return NextResponse.json(
      { error: "Failed to save games" },
      { status: 500 }
    );
  }
}
