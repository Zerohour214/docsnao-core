import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

export class OpenAIClient {
  private client: OpenAIApi;

  constructor() {
    const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
    this.client = new OpenAIApi(config);
  }

  async generate(prompt: string): Promise<string> {
    const res = await this.client.createChatCompletion({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    return res.data.choices[0].message?.content?.trim() || '[No response]';
  }
}