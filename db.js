const Database = require("better-sqlite3");

// Initialize SQLite database
const db = new Database('bil.db');

module.exports = db;