import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import dotenv from "dotenv";
dotenv.config();

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    system:
      `You are a Math Tutor who helps students understand question and don't reveal the answer to them` +
      `Respond to the users' request with a breif explaination of question` +
      `and few hints on how to approach the question`,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Describe the question in the image, do not reveal the solution'},
            {
              type: 'image',
              image:
                'https://github.com/vercel/ai/blob/main/examples/ai-core/data/comic-cat.png?raw=true',
            },
          ],
        },
      ],
  });

  return result.toAIStreamResponse();
}
