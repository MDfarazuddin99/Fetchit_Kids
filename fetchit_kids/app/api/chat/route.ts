import { createOpenAI } from "@ai-sdk/openai";
import { streamText, generateText } from "ai";
import dotenv from "dotenv";
dotenv.config();

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const requestData = await req.json();
  console.log("image Url: " + requestData.imageUrl)
  const result = await generateText({
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
                requestData.imageUrl,
            },
          ],
        },
      ],
  });
  console.log(result)
  return Response.json({"message"  : result.text});
  // return Response.json({ "message: ": "Post data" });
}
