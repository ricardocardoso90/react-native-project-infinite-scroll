import { seed } from './seed';
import { type SQLiteDatabase } from 'expo-sqlite';

export async function databaseInit(database: SQLiteDatabase) {
  const result = await database.getFirstAsync<Product>(`
    SELECT name 
    FROM sqlite_master 
    WHERE type='table' AND name='products';
  `);

  if (!result) {
    await database.execAsync(`
      CREATE TABLE products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
    `);

    await seed(database);
  }
};