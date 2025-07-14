import { PromptBuilder } from '../factory/promptBuilder';

export class RustPromptBuilder implements PromptBuilder {
  build(code: string): string {
    return `You're a senior Rust developer. Write a clear and concise documentation comment (/// style) for the following Rust code. Include information about parameters, return values, and usage if applicable.\n\n\
\`\`\`rust\n${code}\n\`\`\``;
  }
}