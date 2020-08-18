const program = require('commander');
const pass = require("../commands/pass");

program
  .command('set')
  .description('Add a new account and pass of your site')
  .action(pass.set);

program
  .command('get')
  .description('Get a pass for an account provided')
  .action(pass.get);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
  