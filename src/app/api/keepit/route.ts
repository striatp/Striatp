import { NextResponse } from 'next/server';
import { readKeepItKey, writeKeepItKey, generateKey } from '@/utils/keepit/keyManager';
import { z } from 'zod';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

import WriteFile from '@/utils/writeFile';
import ReadJsonFile from '@/utils/readJsonFile';
import RateLimit from '@/utils/rateLimit';

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
  // Get the KeepIt API data
  const StoredData = await ReadJsonFile(KeepItDataPath);
  // Return the data to the client
  return NextResponse.json({ data: [ StoredData ] });
}

// Function to throw a Next.js error message
function CreateErrorResponse(message: string, status: number) {
  // Return an error message
  return NextResponse.json({ error: message }, { status });
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
 *   - `{ error: 'No data provided.' }` with a 400 status if the request body is empty or invalid.
*/
export async function POST(req: Request) {
  async function handleRateLimit(req: Request): Promise<boolean> {
    const isRateLimited = RateLimit(req);
    if (isRateLimited) {
      console.log("Too many requests.");
      return true;
    }
    return false;
  }

  // Variables
  const AuthorizationHeader: string | null = req.headers.get('X-Authorization');
  const BotHeader: string | null = req.headers.get('X-Bot');
  const IDHeader: string | null = req.headers.get('X-ID');
  const CurrentKey: string = await readKeepItKey();
  const BotID: string | null = process.env.KEEPIT_BOT_ID ? process.env.KEEPIT_BOT_ID : null;

  // Check if the authorization header key is correct
  if (!AuthorizationHeader || AuthorizationHeader !== `Bearer ${CurrentKey}`) {
    // Rate limiting
    if (await handleRateLimit(req)) {
      return CreateErrorResponse('Too many requests.', 429);
    }
    return CreateErrorResponse('Unauthorized.', 401);
  }

  // Check if the bot header key is correct
  if (!BotHeader || BotHeader !== `True`) {
    // Rate limiting
    if (await handleRateLimit(req)) {
      return CreateErrorResponse('Too many requests.', 429);
    }
    return CreateErrorResponse('Unauthorized.', 401);
  }

  // Check if the bot header key is correct
  if (!IDHeader || IDHeader !== `${BotID}`) {
    // Rate limiting
    if (await handleRateLimit(req)) {
      return CreateErrorResponse('Too many requests.', 429);
    }
    return CreateErrorResponse('Unauthorized.', 401);
  }

  console.log(req) // Debug request

  // Define the structure of the body
  const BodySchema = z.object({
    userCount: z.number(),
    serverCount: z.number(),
    commandCount: z.number(),
    applicationCmdCount: z.number(),
  });
  
  let Body;
  try {
    Body = await req.json();
  } catch {
    return CreateErrorResponse('Invalid JSON format.', 400);
  }
  const ParsedBody = BodySchema.safeParse(Body);
  
  // Check the body has the correct format
  if (!ParsedBody.success) {
    return CreateErrorResponse('Invalid data format.', 400);
  }

  // Overwrite the file with the new body
  await WriteFile(KeepItDataPath, Body);

  // Generate new key
  const NewKey = generateKey(128);
  await writeKeepItKey(NewKey);
  console.log(`New key for KeepIt API generated: ${NewKey}`);

  // JSON response
  return NextResponse.json({
    success: true,
    data: [ Body ]
  });
}