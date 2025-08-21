import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // set in .env.local
});

export async function POST(req: Request) {
  try {
    const { problem } = await req.json();

    if (!problem) {
      return NextResponse.json({ error: "No problem provided" }, { status: 400 });
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // cheaper + good reasoning
      messages: [
        {
          role: "system",
          content:
            "You are a DSA tutor. Explain coding problems step by step in simple words with hints.",
        },
        {
          role: "user",
          content: `Explain this problem: ${problem}`,
        },
      ],
    });

    return NextResponse.json({
      explanation: response.choices[0].message?.content,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
