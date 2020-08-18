# Password-CLI
Node JS CLI for save/get account or site and password.

### Getting started
```
npm install

npm link
```

### Usage/commands
You can run in your terminal at any path:
```
# See all the commands
pwd-cli

# Set an site/account and password to save:
pwd-cli pass set

# Get a password for an account or site provided:
pwd-cli pass get
```

### Admin pass
The CLI will ask for a admin pass when you execute any command. In the "passManager" class you can change this password if you want. Its just an example to add security, maybe you can save that password
in another place to make it more "invisible"
