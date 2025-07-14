import { CLI } from './presentation/cli/cli';

(async () => {
  const cli = new CLI();
  await cli.run();
})();