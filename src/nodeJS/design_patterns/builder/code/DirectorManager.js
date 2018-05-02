const AccountBuilder = require('./AccountBuilder');
class DirectorManager {
  constructor(name){
    this.name = name;
  }
  construct(name){
    return new AccountBuilder('Bill')
                .makeEmployee()
                .makeManager()
                .makeActive()
                .makeAdmin()
                .giveAccessLevel(5)
                .build();
  }
}

module.exports = DirectorManager;