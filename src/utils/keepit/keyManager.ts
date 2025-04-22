import fs from 'fs';
import path from 'path';

const keyPath = path.join(process.cwd(), 'src/data/keys.json');

export function generateKey(length = 128): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export function readKeepItKey(): string {
  const data = fs.readFileSync(keyPath, 'utf-8');
  const parsed = JSON.parse(data);
  return parsed.KEEPIT_PRIVATE_API_KEY;
}

export function writeKeepItKey(newKey: string) {
  const updated = { KEEPIT_PRIVATE_API_KEY: newKey };
  fs.writeFileSync(keyPath, JSON.stringify(updated, null, 2));
}