import { GoogleGenAI } from "@google/genai";

// Passing an empty object allows TypeScript to compile, 
// while letting the SDK look up GEMINI_API_KEY from your environment automatically.
export const ai = new GoogleGenAI({});