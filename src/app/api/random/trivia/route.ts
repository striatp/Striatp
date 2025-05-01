import { NextResponse } from 'next/server';
import path from 'path';

import ReadJsonFile from '@/utils/readJsonFile';

// Get the path of KeepIt's data
const QuestionsFilePath: string = path.join(process.cwd(), 'src/data/random/trivias.json');

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
  try {
    // Get the KeepIt API data
    const Questions = await ReadJsonFile(QuestionsFilePath);
    const Question = Array.isArray(Questions?.questions) && Questions.questions.length > 0
      ? Questions.questions[Math.floor(Math.random() * Questions.questions.length)]
      : "No facts available"; // Fallback value if no facts exist

    // Return the data to the client
    return NextResponse.json({ data: [Question] });
  } catch (error) {
    console.error("Error reading questions:", error);
    return NextResponse.json({ error: "Failed to fetch questions" }, { status: 500 });
  }
}