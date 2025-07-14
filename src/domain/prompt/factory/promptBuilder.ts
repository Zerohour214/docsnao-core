export interface PromptBuilder {
  build(code: string): string;
}

export class PromptFactory {
  static getBuilder(language: string): PromptBuilder {
    switch (language.toLowerCase()) {
      case 'rust':
        return new (require('../builders/rustPromptBuilder').RustPromptBuilder)();
      default:
        throw new Error('No prompt builder available for ' + language);
    }
  }
}