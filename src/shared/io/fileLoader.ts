import * as fs from 'fs';

export class FileLoader {
  load(options: { code?: string; file?: string }): string | null {
    if (options.code) return options.code;
    if (options.file) return fs.readFileSync(options.file, 'utf-8');
    return null;
  }
}