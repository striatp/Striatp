import fs from 'fs/promises';

/**
 * Writes data to a file in JSON format asynchronously.
 *
 * @param path - The file path to write the data to.
 * @param data - The data to be written (will be stringified).
 */
export default async function writeFile<T>(path: string, data: T): Promise<void> {
  try {
    const JSONData = JSON.stringify(data, null, 2);
    await fs.writeFile(path, JSONData, { encoding: 'utf8' });
    console.log(`Data successfully written to ${path}`);
  } catch (error) {
    console.error(`Failed to write data to ${path}:`, error);
    throw error;
  }
}