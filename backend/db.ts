import Database from 'better-sqlite3';
import * as path from 'path';

const dbPath = path.resolve(__dirname, '../app.db');
const db = new Database(dbPath, { verbose: console.log });

export default db;