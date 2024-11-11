import Database from "better-sqlite3";
import path from "path";

// Construye la ruta absoluta
const dbPath = path.join(process.cwd(), "db", "games.db");
const db = new Database(dbPath);

export default db;
