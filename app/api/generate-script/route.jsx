import OpenAI from "openai"
import { NextResponse } from "next/server"
import { GENERATE_SCRIPT_PROMPT } from "@/service/prompt";


export const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
})


export async function POST(req) {

    const { topic, language } = await req.json();

    const PROMPT = GENERATE_SCRIPT_PROMPT.replace('{topic}', topic).replace('{language}', language);

    const completion = await openai.chat.completions.create({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
            { role: "user", content: PROMPT}
        ],
    })

    console.log(completion.choices[0].message)
    return NextResponse.json(completion.choices[0].message?.content)


}