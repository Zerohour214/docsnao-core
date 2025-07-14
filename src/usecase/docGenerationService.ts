import { OpenAIClient } from '@infra/openai/openaiClient';
import { PromptFactory } from '@domain/prompt/factory/promptBuilder';

export class DocGenerationService {
  private openai = new OpenAIClient();

  async generate(language: string, code: string): Promise<string> {
    const builder = PromptFactory.getBuilder(language);
    const prompt = builder.build(code);
    const response = await this.openai.generate(prompt);
    return response;
  }
}