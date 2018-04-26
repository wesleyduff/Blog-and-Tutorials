const Account = require('./Account');

class AccountBuilder {

  constructor(name){
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager() {
    this.isManager = true;
    return this;
  }

  makeAdmin() {
    this.isAdmin = true;
    return this;
  }

  giveAccessLevel(n){
    this.accessLevel = n;
    return this;
  }

  makeActive(){
    this.isActive = true;
    return this;
  }

  saveDoctors(doctorsList=[]){
    this.saveDoctors = doctorsList;
    return this;
  }

  build(){
    return new Account(this);
  }
}

module.exports = AccountBuilder;