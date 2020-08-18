#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('pass', 'Add a new acc-password or check one')
  .parse(process.argv);