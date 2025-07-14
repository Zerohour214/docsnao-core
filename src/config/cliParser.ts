import { Command } from 'commander';

export function parseCLIArgs() {
  const program = new Command();

  program
    .name('docsnao')
    .description('AI-powered documentation generator')
    .version('0.1.0')
    .requiredOption('-l, --language <lang>', 'Language of the source code')
    .option('-f, --file <path>', 'Path to input file')
    .option('-c, --code <code>', 'Raw code input as a string')
    .parse(process.argv);

  return program.opts();
}