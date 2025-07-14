import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

export class OpenAIClient {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async generate(prompt: string): Promise<string> {
    const res = await this.client.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    return res.choices[0].message.content?.trim() || '[No response]';
  }
}
