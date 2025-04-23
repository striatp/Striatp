import fs from 'fs/promises';
import path from 'path';

const keyPath = path.join(process.cwd(), 'src/data/keys.json');

/**
 * Generates a random alphanumeric key of the specified length.
 * @param length - The length of the key to generate.
 */
export function generateKey(length = 128): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

/**
 * Reads the stored KeepIt API key from a file.
 */
export async function readKeepItKey(): Promise<string> {
  const data = await fs.readFile(keyPath, 'utf-8');
  const parsed = JSON.parse(data);
  return parsed.KEEPIT_PRIVATE_API_KEY;
}

/**
 * Writes a new KeepIt API key to the file.
 * @param newKey - The new key to store.
 */
export async function writeKeepItKey(newKey: string): Promise<void> {
  const updated = { KEEPIT_PRIVATE_API_KEY: newKey };
  await fs.writeFile(keyPath, JSON.stringify(updated, null, 2));
}