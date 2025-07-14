import { parseCLIArgs } from '../../config/cliParser';
import { FileLoader } from '../../shared/io/fileLoader';
import { Logger } from '../../shared/logging/logger';
import { DocGenerationService } from '../../usecase/docGenerationService';

export class CLI {
  async run() {
    const options = parseCLIArgs();
    const loader = new FileLoader();
    const logger = new Logger();
    const docService = new DocGenerationService();

    const code = loader.load(options);

    if (!code) {
      logger.error('Must provide either --file or --code');
      process.exit(1);
    }

    try {
      const doc = await docService.generate(options.language, code);
      logger.success(doc);
    } catch (err) {
      logger.error('Failed to generate documentation: ' + err);
      process.exit(1);
    }
  }
}