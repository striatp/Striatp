import fs from 'fs/promises';

/**
 * Reads and parses a JSON file asynchronously.
 *
 * @template T - The expected type of the parsed JSON data.
 * @param path - The file path to read the JSON from.
 * @returns The parsed JSON data.
 */
export default async function readJsonFile<T>(path: string): Promise<T> {
  try {
    const file = await fs.readFile(path, 'utf-8');
    return JSON.parse(file) as T;
  } catch (error) {
    console.error(`Error reading or parsing file at ${path}:`, error);
    throw error;
  }
}