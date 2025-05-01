import { NextResponse } from 'next/server';
import path from 'path';

import ReadJsonFile from '@/utils/readJsonFile';

// Get the path of KeepIt's data
const FactsFilePath: string = path.join(process.cwd(), 'src/data/random/facts.json');

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
  const Facts = await ReadJsonFile(FactsFilePath);
  const Fact = Array.isArray(Facts.facts) && Facts.facts.length > 0
    ? Facts.facts[Math.floor(Math.random() * Facts.facts.length)]
    : null;
  // Return the data to the client
  return NextResponse.json({ data: [ { fact: Fact } ] });
}