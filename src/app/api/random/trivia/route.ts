import { NextResponse } from 'next/server';
import path from 'path';

import ReadJsonFile from '@/utils/readJsonFile';

// Define the structure of the trivia JSON
interface TriviaQuestion {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
}

interface TriviaData {
  questions: TriviaQuestion[];
}

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
    const Questions: TriviaData = await ReadJsonFile(QuestionsFilePath);

    // Ensure Questions has the expected structure
    const questionsArray = Array.isArray(Questions?.questions) ? Questions.questions : [];
    const Question = questionsArray.length > 0
      ? questionsArray[Math.floor(Math.random() * questionsArray.length)]
      : { question: "No facts available", A: "", B: "", C: "", D: "", answer: "" }; // Fallback value if no facts exist

    // Return the data to the client
    return NextResponse.json({ data: [Question] });
  } catch (error) {
    console.error("Error reading questions:", error);
    return NextResponse.json({ error: "Failed to fetch questions" }, { status: 500 });
  }
}