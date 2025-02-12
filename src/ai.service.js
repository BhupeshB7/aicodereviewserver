import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { systemInstruction } from "../systemInstruction.js";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMENIYA_API_KEY);
console.log("genAI initialized", genAI);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: systemInstruction,
});

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content");
  }
}

export default generateContent;
