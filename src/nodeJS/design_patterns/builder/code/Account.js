
class Account {

  constructor(builder){
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.isAdmin = builder.isAdmin;
    this.accessLevel = builder.accessLevel || 0;
    this.isActive = builder.isActive;
    this.saveDoctors = builder.saveDoctors || [];
  }

  toString() {
    return JSON.stringify(this);
  }
  
}

module.exports = Account;