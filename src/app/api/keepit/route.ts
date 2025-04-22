import { NextResponse } from 'next/server';
import { readKeepItKey, writeKeepItKey, generateKey } from '@/utils/keepit/keyManager';
import path from 'path';

import WriteFile from '@/utils/writeFile';
import ReadJsonFile from '@/utils/readJsonFile';

// Get the path of KeepIt's data
const KeepItDataPath: string = path.join(process.cwd(), 'src/data/keepit/data.json');

/**
 * Handles GET requests to retrieve the KeepIt data.
 * 
 * This function reads the KeepIt data from a JSON file located at a predefined path
 * and returns it as a JSON response.
 * 
 * @returns A JSON response containing the KeepIt data:
 * - On success: `{ data: <KeepIt data> }` with a 200 status.
 * - On failure: An appropriate error response (not explicitly handled in this function).
*/
export async function GET() {
  const StoredData = ReadJsonFile(KeepItDataPath);
  return NextResponse.json({ data: StoredData });
}

/**
 * Handles POST requests to update the KeepIt data.
 * 
 * This function performs the following steps:
 * 1. Validates the `Authorization` header against the current key.
 * 2. Parses the request body and ensures it contains valid data.
 * 3. Overwrites the existing KeepIt data file with the new data.
 * 4. Generates a new key for future authorization and updates the key storage.
 * 
 * @param req - The incoming HTTP request object.
 * 
 * @returns A JSON response:
 * - On success: `{ success: true, data: <updated data> }` with a 200 status.
 * - On failure:
 *   - `{ error: 'Unauthorized.' }` with a 401 status if the `Authorization` header is missing or invalid.
 *   - `{ error: 'No data provided' }` with a 400 status if the request body is empty or invalid.
*/
export async function POST(req: Request) {
  // Variables
  const AuthorizationHeader = req.headers.get('Authorization');
  const CurrentKey = readKeepItKey();

  // Check if the authorization header key is correct
  if (!AuthorizationHeader || AuthorizationHeader !== `Bearer ${CurrentKey}`) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const body = await req.json();

  // Check if the body is empty
  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({ error: 'No data provided' }, { status: 400 });
  }

  // Overwrite the file with the new body
  WriteFile(KeepItDataPath, body);

  // Generate new key
  const NewKey = generateKey(128);
  writeKeepItKey(NewKey);
  console.log(`[API] New key for KeepIt API generated: ${NewKey}`);

  // JSON response
  return NextResponse.json({
    success: true,
    data: body
  });
}