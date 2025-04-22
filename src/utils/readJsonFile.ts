import fs from 'fs'

/**
 * Reads and parses a JSON file from the specified path.
 *
 * @template T - The expected type of the parsed JSON data. Defaults to `any`.
 * @param {string} path - The file path to read the JSON data from.
 * @returns {T} - The parsed JSON data as the specified type.
 * @throws {Error} - Throws an error if the file cannot be read or parsed.
*/
export default function readJsonFile(path: string): JSON {
    try {
        const file = fs.readFileSync(path, 'utf-8');
        return JSON.parse(file);
    } catch (error) {
        console.error(`Error reading or parsing file at ${path}:`, error);
        throw error;
    }
}