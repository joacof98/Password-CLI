const Configstore = require('configstore');
const pkg = require('../package.json');
const inquirer = require("inquirer");
const { isRequired } = require("../util/isRequired");

class passManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  async checkAuth() {
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "adminpass",
        message: "Admin pass:".green,
        validate: isRequired,
      },
    ]);
    if (input.adminpass !== "Pepega") {
      throw new Error("Not allowed >:(");
    }
  }

  setPass(site, pass) {
    this.conf.set(site, pass);
    return pass;
  }

  getPass(site) {
    const pass = this.conf.get(site);
    if (!pass) {
      throw new Error("Cant found pass associated with that site");
    }

    return pass;
  }
}

module.exports = passManager;