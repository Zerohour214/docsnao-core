import { CLI } from '@cli/cli';

(async () => {
  const cli = new CLI();
  await cli.run();
})();