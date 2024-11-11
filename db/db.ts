// db/db.js
import Database from "better-sqlite3";
const db = new Database("./db/games.db");

export default db;
