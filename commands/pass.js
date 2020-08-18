const inquirer = require("inquirer");
const colors = require("colors");
const passManager = require("../lib/passManager");
const { isRequired } = require("../util/isRequired");

const pass = {
  async set() {
    const pass_mgr = new passManager();
    try {
      await pass_mgr.checkAuth();
      const site = await inquirer.prompt([
        {
          type: "input",
          name: "siteName",
          message: "Enter site ".green,
          validate: isRequired,
        },
      ]);
      const pwd = await inquirer.prompt([
        {
          type: "input",
          name: "pass",
          message: "Enter password ".green,
          validate: isRequired,
        },
      ]);

      const pass = pass_mgr.setPass(site.siteName, pwd.pass);
      if (pass) {
        console.log("Pass setted".blue + ` (${pass})`);
      }
    } catch (err) {
      console.log(err.message.red);
    }
  },

  async get() {
    const pass_mgr = new passManager();
    try {
      await pass_mgr.checkAuth();
      const site = await inquirer.prompt([
        {
          type: "input",
          name: "siteName",
          message: "Enter site ".green,
          validate: isRequired,
        },
      ]);
      const pass = pass_mgr.getPass(site.siteName);

      console.log("Your password: ", pass.yellow);
      return pass;
    } catch (err) {
      console.log(err.message.red);
    }
  },
};

module.exports = pass;
